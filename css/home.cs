@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900');
/* ____________________ general styles ___________________ */
html {
  min-height: 650px;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  min-height: 650px;
  background: #f5f5f5;
}
.homepage__sidebar {
  position: fixed;
  height: 100%;
  width: 250px;
  z-index: 100;
  background: #fff;
  min-height: 700px;
}
.homepage__content {
  position: fixed;
  min-height: 100%;
  width: 100%;
  padding-left: 250px;
  z-index: 10;
}
.homepage__content_tab {
  -webkit-transition: opacity .6s;
  -moz-transition: opacity .6s;
  -o-transition: opacity .6s;
  transition: opacity .6s;
}
.homepage__content_tab {
  width: 100%;
  position: absolute;
  background: #fafafa;
}
.active-tab {
  z-index: 200;
}
.next-tab {
  z-index: 150;
}
a {
  color: #2b2b2b;
  outline: none;
  text-decoration: none!important;
}
a:hover {
  color: #2b2b2b;
}
/* ______________________ sidebar ______________________ */
.nav ul {
  list-style-type: none;
  color: #2b2b2b;
}
.nav__main > li {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
  cursor: pointer;
}
.nav__main_home-options {
  margin-top: 25px;
  margin-bottom: 25px;
  font-weight: 200;
  font-size: 14px;
  color: #2b2b2b;
  padding-left: 15px;
}
.nav__main_home-options li {
  margin-bottom: 5px;
  cursor: pointer;
}
.homepage__sidebar_logo-container {
  text-align: center;
  margin-top: 75px;
  margin-bottom: 75px;
}
.homepage__sidebar_logo-text {
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 14px;
  text-align: center;
  margin-top: 30px;
}
.social-wrap {
  text-align: center;
  bottom: 0;
  position: absolute;
  width: 100%;
}
.social-wrap i {
  font-size: 25px;
  padding: 20px;
  cursor: pointer;
}
/*________________________ homepage main tab ____________________*/
.home-intro__container {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
.home-intro__container_title {
  color: #2b2b2b;
  text-align: center;
}
.home-intro__container_title h1 {
  text-transform: uppercase;
  font-size: 70px;
  font-weight: 900;
  margin-bottom: 15px;
}
.home-intro__container_title h3 {
  font-size: 35px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
}
.scroll-down-btn {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 30px;
  cursor: pointer;
}
.scroll-down-btn i {
  font-size: 33px;
  color: #9855d4;
}
/*_____________________ homepage section 2 ( aka WHAT WE DO ) ________________________*/
.homepage__section {
  width: 100%;
  height: 100%;
  padding: 50px 10px;
  color: #2b2b2b;
}
.homepage__section-title {
  margin-left: 10%;
}
.homepage__section-title h2 {
  font-size: 36px;
  font-weight: 600;
  margin: 0;
}
.homepage__section-title hr {
  width: 75px;
  border: 2px solid #2b2b2b;
  float: left;
}
.section-darker {
  background: #f5f5f5;
}
.what-we-do__tabs {
  margin-top: 75px;
}
.what-we-do__tabs_tab {
  padding: 10px 0;
}
.what-we-do__tabs_tab .tab-content {
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.tab-wrap-left {
  padding-right: 7px!important;
}
.tab-wrap-center {
  padding-right: 7px!important;
  padding-left: 8px!important;
}
.tab-wrap-right {
  padding-left: 7px!important;
}
.what-we-do-text {
  color: #2b2b2b;
  font-size: 23px;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.2;
  margin-top: 20px;
}
.tab-content > div {
  position: absolute;
  bottom: 30px;
  left: 50px;
}
/* ___________________________________ homepage section 3 (OUR RECENT WORKS) ______________________________ */
.recent-works__tabs {
  margin-top: 75px;
}
.recent-works__filter {
  float: right;
  font-size: 18px;
  margin-right: 10%;
  color: #2b2b2b;
  margin-top: -33px;
}
.recent-works__filter .active {
  border-bottom: 1px solid #2b2b2b;
}
.recent-works__filter span {
  display: inline-block;
  cursor: pointer;
  padding: 0 10px;
  font-weight: 500;
}
.recent-works-gray {
  background-color: #464646;
}
.recent-works-violet {
  background-color: #9855d4;
}
.recent-works-white {
  background-color: #fff;
}
.recent-works-gradient-green {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('../img/green.png');
}
.recent-works-gradient-violet {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('../img/violet.png');
}
.recent-works-placeholder {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  background-clip: content-box;
}
.recent-works-placeholder .top-offset {
  position: absolute;
  left: 50px;
  bottom: 52%;
}
.recent-works-placeholder .full-offset {
  position: absolute;
  left: 50px;
  bottom: 2%;
}
.recent-works__project-description {
  color: #fff;
  font-weight: 900;
}
.recent-works__project-description p {
  margin-bottom: 0;
}
.recent-works__project-description .main {
  font-size: 23px;
}
.recent-works__project-description .small {
  font-size: 18px;
}
.recent-works__all-projects-btn {
  font-weight: 900;
  font-size: 23px;
  color: #2b2b2b;
  cursor: pointer;
}
.recent-works__all-projects-btn i {
  font-size: 18px;
  color: #9855d4;
  padding-left: 7px;
}
.centered-tab {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
/* _________________ team _________________ */
.team-slider__container {
  padding-left: 15%;
  padding-right: 15%;
}
.team-slider__content {
  width: 70%;
  position: absolute!important;
  overflow: hidden;
  margin-top: 75px;
}
.slider-track {
  height: 2px;
  background: #9855d4;
  width: 225px;
  position: absolute;
  box-sizing: content-box;
}
.slide-tab {
  padding: 10px;
}
.slider-thumb {
  height: 7px;
  margin-top: 0px;
  background: #9855d4;
  position: absolute;
  margin-top: -2px;
  cursor: pointer;
}
.slider-stats {
  position: absolute;
  margin-top: -25px;
  right: 0;
  font-weight: 600;
}
.team-slider__controls {
  width: 260px;
  box-sizing: border-box;
  position: absolute;
  bottom: 15%;
  left: 15%;
  margin-left: 20px;
}
.slide {
  display: none;
}
.active-slide {
  display: inline-block;
}
.next-slide {
  display: inline-block;
  opacity: .5;
}
.slider-section {
  background-color: transparent;
}
.slide__content_text {
  font-weight: 900;
  color: #2b2b2b;
}
.slide__content_text .main {
  font-size: 23px;
  margin-top: 20px;
  margin-bottom: 0;
}
.slide__content_text .small {
  font-size: 18px;
}
.slick-slide {
  overflow: visible;
}
.slick-active + .slick-current {
  opacity: .5;
}
.slick-list {
  padding: 0;
}
@media screen and (max-width: 1350px) {
  .team-slider__controls {
    left: 25px;
    bottom: 15%;
  }
  .team-slider__content {
    width: 80%;
  }
  .team-slider__container {
    padding-left: 10%;
    padding-right: 10%;
  }
}
@media screen and (max-width: 1200px) {
  .homepage__section-title h2 {
    font-size: 30px;
  }
  .recent-works__filter {
    float: right;
    font-size: 16px;
    margin-right: 10%;
    color: #2b2b2b;
    margin-top: -29px;
  }
  .home-intro__container_title h1 {
    font-size: 55px;
  }
  .home-intro__container_title h3 {
    font-size: 30px;
  }
  .recent-works-placeholder .top-offset {
    left: 30px;
  }
  .recent-works-placeholder .full-offset {
    left: 30px;
  }
  .recent-works__filter {
    margin-top: 40px;
  }
}
@media screen and (max-width: 1000px) {
  .recent-works__project-description .main {
    font-size: 18px;
  }
  .recent-works__project-description .small {
    font-size: 14px;
  }
  .recent-works__all-projects-btn {
    font-size: 18px;
  }
  .what-we-do-text {
    font-size: 18px;
  }
}
@media screen and (max-height: 800px) {
  .team-slider__controls {
    bottom: 7%;
  }
}
