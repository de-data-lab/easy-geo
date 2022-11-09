const Price = () => {
    return (
        <div className="price">
            <div className="card-1">
                <div className="container">
                    <div className="dollar">$</div>
                    <div className="price">0</div>
                </div>
                <h3 className="type">BASIC</h3>
                <div className="divider"></div>
                <ul>
                    <li>Up to 10 addresses each file</li>
                    <li>No login/signup required</li>
        
                </ul>
                <div className="link">
                    <button>START TODAY</button>
                </div>
            </div>
            <div className="card-2">
                <div className="pop" >Popular</div>
                <div className="container">
                    <div className="dollar">$</div>
                    <div className="price">10</div>
                </div>
                <h3 className="type">PROFESSIONAL</h3>
                <div className="divider"></div>
                <ul>
                    <li>Everything in Basic</li>
                    <li>Unlimited addresses in one file</li>
                    <li>File storages up to a year</li>
                    <li>File storages up to 100MB</li>
                    
                </ul>
                <div className="link">
                    <button>START TODAY</button>
                </div>
            </div>
            <div className="card-3">
                <div className="container">
                    <div className="dollar">$</div>
                    <div className="price">50</div>
                </div>
                <h3 className="type">ENTERPRISE</h3>
                <div className="divider"></div>
                <ul>
                    <li>Everything in Basic and Pro</li>
                    <li>Unlimited file storage</li>
                    <li>Customized solution for files conversion</li>
                    <li>Supported by data experts</li>
                </ul>
                <div className="link">
                    <button>START TODAY</button>
                </div>
            </div>
        </div>
    )
}

export default Price;