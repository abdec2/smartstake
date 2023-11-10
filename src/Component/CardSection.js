import React from 'react'

const CardSection = () => {
  return (
    <section className="work padding-top padding-bottom bg--primary-color">
        <div className="container">
            <div className="section-header section-header--middle">
                <div className="section-header__content">
                    <div className="section-header__titlebar">
                        <p className="section-header__subtitle">Core Features and Vision </p>
                        <h2 className="section__header__title"> Transactional Dynamics of the $MART Token</h2>
                    </div>
                </div>
            </div>
            <div className="work__wrapper">
                <div className="row  justify-content-center g-4">
                    <div className="col-lg-4 col-sm-6">
                        <div className="work__item">
                            <div className="work__item-inner">
                                <div className="work__item-thumb">
                                    <img src="assets/images/work/work_3.png" alt="work Step 1 Image"/>
                                </div>
                                <div className="work__item-content">
                                    <h4>4% Redistribution in BUSD</h4>
                                    <p>This portion is designed to consistently reward holders.
The choice of BUSD, a stable coin steadfastly pegged to the US dollar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="work__item">
                            <div className="work__item-inner">
                                <div className="work__item-thumb">
                                    <img src="assets/images/work/work_2.png" alt="work Step 2 Image"/>
                                </div>
                                <div className="work__item-content">
                                    <h4>2% Project Development</h4>
                                    <p>A project’s success is contingent upon continuous evolution and betterment.
This allocation is earmarked for research, technological</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="work__item">
                            <div className="work__item-inner">
                                <div className="work__item-thumb">
                                    <img src="assets/images/work/work_6.png" alt="work Step 3 Image"/>
                                </div>
                                <div className="work__item-content">
                                    <h4>1% Liquidity Addition</h4>
                                    <p>A healthy trading environment demands liquidity. By channeling a part
of the fee to the liquidity pool, we ensure seamless trades, minimal slippage, and an overall
enhanced trading experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="work__item">
                            <div className="work__item-inner">
                                <div className="work__item-thumb">
                                    <img src="assets/images/work/work_5.png" alt="work Step 3 Image"/>
                                </div>
                                <div className="work__item-content">
                                    <h4>1% Token Burn</h4>
                                    <p>To instill scarcity and potentially augment token value, this portion is
perpetually removed from circulation. Over time, as the supply diminishes, each $MART token
could inherently become more valuable, making the project deflationary by design.
</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="work__item">
                            <div className="work__item-inner">
                                <div className="work__item-thumb">
                                    <img src="assets/images/work/work_1.png" alt="work Step 3 Image"/>
                                </div>
                                <div className="work__item-content">
                                    <h4>2% For Marketing</h4>
                                    <p>Awareness and community engagement are indispensable.
This allocation fuels marketing initiatives, brand partnerships, and outreach efforts.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
               
            </div>
        </div>
    </section>
  )
}

export default CardSection