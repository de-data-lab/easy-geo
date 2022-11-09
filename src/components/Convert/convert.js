import * as d3 from "d3";
import { useState, useEffect } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Convert = (props) => {
    
    const [geoData, setGeoData] = useState([]);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        let data = d3.csvParse(props.text);
        let proxy = "https://mighty-shelf-70474.herokuapp.com/";
        let url = "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?";
        
        console.time("do");
        const fetchData = () => {
            let list = [];
            for (let addr of data) {
                addr[data.columns[0]] = addr[data.columns[0]].replace(/^[^\d]*/, '');
                addr[data.columns[0]] = addr[data.columns[0]].replace(/\s\s+/g, ' ');
                let params = new URLSearchParams({
                    address: addr[data.columns[0]],
                    benchmark: "Public_AR_Current",
                    format: "json",
                })
                
                fetch(proxy + url + params, {
                    headers:{
                      "accepts":"application/json"
                  }})
                .then(response => response.json())
                .then(json => {
                    list.push(json);
                    console.log(list.length)
                    setPercentage((list.length / data.length * 100))
                    if (list.length === data.length) {
                        setGeoData([...list]);
                        console.timeEnd("do");
                    }
                })
            }
        }
        
        fetchData();
        
         
    }, [props.text, setGeoData]);

    const downloadFile = ({ data, fileName, fileType }) => {
        const blob = new Blob([data], { type: fileType });
      
        const a = document.createElement("a");
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        const clickEvt = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        a.dispatchEvent(clickEvt);
        a.remove();
    };

    const exportToJson = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(geoData)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "geo.json";
    
        link.click();

    }

    const exportToCsv = (e) => {
        e.preventDefault();
        let headers = ["Address, Longitude, Latitude"];
        let contents = [];
        geoData.forEach(d => {
            let address = d.result.input.address.address;
            let x = d.result.addressMatches[0].coordinates.x;
            let y = d.result.addressMatches[0].coordinates.y;
            contents.push(address + "," + x + "," + y);
        });

        downloadFile({
            data: [...headers, ...contents].join("\n"),
            fileName: "geo.csv",
            fileType: "text/csv",
        });
    }

    function LinearProgressWithLabel(props) {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                props.value,
              )}%`}</Typography>
            </Box>
          </Box>
        );
      }
      

    return (
        <div>
            <div className="progressBar">
                <LinearProgressWithLabel
                    value={percentage} 
                />
            </div>
            
            {geoData.length ? 
                <div className="actionBtns">
                    <button type="button" onClick={exportToJson}>
                        Export to JSON
                    </button>
                    <button type="button" onClick={exportToCsv}>
                        Export to CSV
                    </button>
                </div>
            : null}   
        </div>
    )


}

export default Convert;

