import React from "react";
import './Explore.css'
const Explore = () => {
    return (
        <>
            <p>Explore options near me</p>
            
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Popular cuisines near me
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                    Bakery food near meBeverages food near meBiryani food near meBurger food near meChinese food near meDesserts food near meIce Cream food near meKebab food near meMaharashtrian food near meMomos food near meMughlai food near meNorth Indian food near mePizza food near meRolls food near meSandwich food near meSeafood food near meShake food near meSichuan food near meSouth Indian food near meStreet food near me
                                    </div>
                                </div>
                            </div>
                           
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Popular restaurant types near me
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse ">
                                    <div class="accordion-body">
                                    Bakeries near meBars near meBeverage Shops near meBhojanalya near meCafés near meCasual Dining near meClubs near meCocktail Bars near meConfectioneries near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meFood Trucks near meIrani Cafes near meKiosks near meLounges near meMicrobreweries near mePaan Shop near mePubs near meQuick Bites near meSweet Shops near me
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Top Restaurant Chains
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    

        </>
    )
}
export default Explore;