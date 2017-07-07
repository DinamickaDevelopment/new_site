import React, {Component} from 'react'
import './css/LatestPosts.css'

export default class LatestPosts extends Component {
    render() {
        let {PUBLIC_URL} = process.env 
        return (
            <div className="homepage__content_tab_block"> 
                <div className="row">
                    <div className="homepage__section-title">
                        <h2>LATEST POSTS</h2>
                        <hr />
                    </div>	
                <div className="latest-posts__container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="post-img post-1">
                                <img src={PUBLIC_URL + "images/post1.png"} className="img-responsive" alt="post" />
                            </div>
                            <div className="post-content">
                                <div className="post-content__stats">category / 16.01.2017</div>
                                <div className="post-content__title">post headline one or two lines</div>
                                <div className="post-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                                    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                    aliquam quaerat voluptatem.</div>
                            </div>
                            <div className="read-more">
                                <p>READ MORE</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="post-img post-2">
                                <img src={PUBLIC_URL + "images/post2.png"} className="img-responsive" alt="post" />
                            </div>
                            <div className="post-content">
                                <div className="post-content__stats">category / 16.01.2017</div>
                                <div className="post-content__title">post headline one or two lines</div>
                                <div className="post-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                                    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                    aliquam quaerat voluptatem.</div>
                            </div>
                            <div className="read-more">
                                <p>READ MORE</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="post-img post-3">
                                <img src={PUBLIC_URL + "images/post3.png"} className="img-responsive" alt="post" />
                            </div>
                            <div className="post-content">
                                <div className="post-content__stats">category / 16.01.2017</div>
                                <div className="post-content__title">post headline one or two lines</div>
                                <div className="post-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                                    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                    aliquam quaerat voluptatem.</div>
                            </div>
                            <div className="read-more">
                                <p>READ MORE</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="more-posts__container col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="more-posts-btn action-btn">MORE POSTS</div>
                        </div>
                    </div>
                    </div>  
                </div>
            </div>
        )
    }
}