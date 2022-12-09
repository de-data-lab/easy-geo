
const Price = () => {
    return (
        <div class="container">
            <div class="panel pricing-table">
            
            <div class="pricing-plan">
                <img src={`${process.env.PUBLIC_URL}/img/svg/free.svg`} alt="" className="pricing-img" />
                <h2 class="pricing-header">BASIC</h2>
                <ul class="pricing-features">
                <li class="pricing-features-item">Up to 10 addresses each file</li>
                <li class="pricing-features-item">No login/signup required</li>
                </ul>
                <span class="pricing-price">Free</span>
                <a href="#/" class="pricing-button">Sign up</a>
            </div>
            
            <div class="pricing-plan">
                <img src={`${process.env.PUBLIC_URL}/img/svg/premium.svg`} alt="" class="pricing-img" />
                <h2 class="pricing-header">PREMIUM</h2>
                <ul class="pricing-features">
                <li class="pricing-features-item">Unlimited file storage</li>
                <li class="pricing-features-item">Unlimited addresses in one file</li>
                </ul>
                <span class="pricing-price">$150</span>
                <a href="#/" class="pricing-button is-featured">Free trial</a>
            </div>          
            </div>
        </div>



    )
}

export default Price;

