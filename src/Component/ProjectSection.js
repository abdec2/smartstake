import React from 'react'

const ProjectSection = () => {
  return (
    <div>
    <section className="project project--featured padding-top padding-bottom">
      <div className="container">
        <div className="project__wrapper">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-header section-header--left">
                <div className="section-header__content">
                  <div className="section-header__titlebar">
                    <p className="section-header__subtitle"> Trending</p>
                    <h2 className="section__header__title">Most Popular IDO Projects</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Cum, quod?</p>
                    <div className="project__slider2-nav">
                      <div className="project__slider2-prev">
                        <i className="fa-solid fa-arrow-left" />
                      </div>
                      <div className="project__slider2-next">
                        <i className="fa-solid fa-arrow-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="swiper project__slider2 py-2">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="project__item">
                      <div className="project__item-inner">
                        <div className="project__item-thumb">
                          <img src="assets/images/igo/item/01.jpg" alt="IGO cover" />
                          <span className="badge"><img src="assets/images/chain/solana.png" alt="chain logo" /></span>
                        </div>
                        <div className="project__item-content">
                          <div className="project__item-top">
                            <div className="project__item-author">
                              <a href="#"><img src="assets/images/igo/author/1.png" alt="author image" /></a>
                              <h4>Dexer Xone</h4>
                            </div>
                          </div>
                          <div className="project__item-middle">
                            <ul className="project__infolist">
                              <li className="project__infolist-item">
                                <p className="project__infolist-name">Round Name:</p>
                                <p className="project__infolist-data">Public</p>
                              </li>
                              <li className="project__infolist-item">
                                <p className="project__infolist-name">Participent</p>
                                <p className="project__infolist-data">42</p>
                              </li>
                              <li className="project__infolist-item">
                                <p className="project__infolist-name">Project Start</p>
                                <p className="project__infolist-data">TBA</p>
                              </li>
                            </ul>
                            <div className="project__item-amount">
                              <p>Raised Ammount</p>
                              <h6><span className="color--theme-color">5000</span> / <span>15000
                                  BUSD</span>
                              </h6>
                              <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </div>
                          </div>
                          <div className="project__item-bottom">
                            <a href="project-details.html" className="default-btn default-btn--small">View Details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="project__item">
                      <div className="project__item-inner">
                        <div className="project__item-thumb">
                          <img src="assets/images/igo/item/02.jpg" alt="IGO cover" />
                          <span className="badge"><img src="assets/images/chain/metic.png" alt="chain logo" /></span>
                        </div>
                        <div className="project__item-content">
                          <div className="project__item-top">
                            <div className="project__item-author">
                              <a href="#"><img src="assets/images/igo/author/2.png" alt="author image" /></a>
                              <h4>DeFianXer 3dX</h4>
                            </div>
                          </div>
                          <div className="project__item-middle">
                            <ul className="project__infolist">
                              <li className="project__infolist-item">
                                <p className="project__infolist-name">Round Name:</p>
                                <p className="project__infolist-data">Public</p>
                              </li>
                              <li className="project__infolist-item">
                                <p className="project__infolist-name">Participent</p>
                                <p className="project__infolist-data">42</p>
                              </li>
                              <li className="project__infolist-item">
                                <p className="project__infolist-name">Project Start</p>
                                <p className="project__infolist-data">TBA</p>
                              </li>
                            </ul>
                            <div className="project__item-amount">
                              <p>Raised Ammount</p>
                              <h6><span className="color--theme-color">5000</span> / <span>15000
                                  BUSD</span>
                              </h6>
                              <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </div>
                          </div>
                          <div className="project__item-bottom">
                            <a href="project-details.html" className="default-btn default-btn--small">View Details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="project__item">
                      <div className="project__item-inner">
                        <div className="project__item-thumb">
                          <img src="assets/images/igo/item/03.jpg" alt="IGO cover" />
                          <span className="badge"><img src="assets/images/chain/binance.png" alt="chain logo" /></span>
                        </div>
                        <div className="project__item-content">
                          <div className="project__item-top">
                            <div className="project__item-author">
                              <a href="#"><img src="assets/images/igo/author/3.png" alt="author image" /></a>
                              <h4>Fire Xon</h4>
                            </div>
                          </div>
                          <div className="project__item-middle">
                            <ul className="project__infolist">
                              <li className="project__infolist-item">
                                <p className="project__infolist-name">Round Name:</p>
                                <p className="project__infolist-data">Public</p>
                              </li>
                              <li className="project__infolist-item">
                                <p className="project__infolist-name">Participent</p>
                                <p className="project__infolist-data">42</p>
                              </li>
                              <li className="project__infolist-item">
                                <p className="project__infolist-name">Project Start</p>
                                <p className="project__infolist-data">TBA</p>
                              </li>
                            </ul>
                            <div className="project__item-amount">
                              <p>Raised Ammount</p>
                              <h6><span className="color--theme-color">5000</span> / <span>15000
                                  BUSD</span>
                              </h6>
                              <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </div>
                          </div>
                          <div className="project__item-bottom">
                            <a href="project-details.html" className="default-btn default-btn--small">View Details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="project__item">
                      <div className="project__item-inner">
                        <div className="project__item-thumb">
                          <img src="assets/images/igo/item/05.jpg" alt="IGO cover" />
                          <span className="badge"><img src="assets/images/chain/solana.png" alt="chain logo" /></span>
                        </div>
                        <div className="project__item-content">
                          <div className="project__item-top">
                            <div className="project__item-author">
                              <a href="#"><img src="assets/images/igo/author/6.png" alt="author image" /></a>
                              <h4>DocR Chain</h4>
                            </div>
                          </div>
                          <div className="project__item-middle">
                            <ul className="project__infolist">
                              <li className="project__infolist-item">
                                <p className="project__infolist-name">Round Name:</p>
                                <p className="project__infolist-data">Public</p>
                              </li>
                              <li className="project__infolist-item">
                                <p className="project__infolist-name">Participent</p>
                                <p className="project__infolist-data">42</p>
                              </li>
                              <li className="project__infolist-item">
                                <p className="project__infolist-name">Project Start</p>
                                <p className="project__infolist-data">TBA</p>
                              </li>
                            </ul>
                            <div className="project__item-amount">
                              <p>Raised Ammount</p>
                              <h6><span className="color--theme-color">5000</span> / <span>15000
                                  BUSD</span>
                              </h6>
                              <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </div>
                          </div>
                          <div className="project__item-bottom">
                            <a href="project-details.html" className="default-btn default-btn--small">View Details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project__slider-pagination mt-4 text-center" /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default ProjectSection