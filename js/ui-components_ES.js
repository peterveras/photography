/* HEADER NAVIGATION */
class MyHeader extends HTMLElement{

    connectedCallback() {

        this.innerHTML = `
        <header>
        <!-- start navigation -->
        <nav class="navbar navbar-default bootsnav background-black header-dark white-link navbar-top navbar-expand-lg">
            <div class="container-lg nav-header-container">
                <!-- start logo -->
                <div class="col-auto ps-0">
                    <a href="index_ES.html" title="Pofo" class="logo"><img src="images/logo-white.svg"
                            data-at2x="images/logo-white.svg" class="logo-dark" alt="Pofo"><img
                            src="images/logo-white.svg" data-at2x="images/logo-white.svg" alt="Pofo"
                            class="logo-light default"></a>
                </div>
                <!-- end logo -->
                <div class="col accordion-menu pe-0 pe-md-3">
                    <button type="button" class="navbar-toggler collapsed" data-bs-toggle="collapse"
                        data-bs-target="#navbar-collapse-toggle-1">
                        <span class="sr-only">toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div class="navbar-collapse collapse justify-content-end" id="navbar-collapse-toggle-1">
                        <ul id="accordion" class="nav navbar-nav navbar-left no-margin alt-font text-normal"
                            data-in="animate__fadeIn" data-out="animate__fadeOut">
                            <!-- start menu item -->
                            <li>
                                <a href="#projects" data-tilt>proyectos</a>
                            </li>
                            <!-- end menu item -->
                            <!-- start menu item -->
                            <li>
                                <a href="about_ES.html" data-tilt>Acerca de mi</a>
                            </li>
                            <!-- end menu item -->
                            <!-- start menu item -->
                            <li>
                                <a href="contact_ES.html" data-tilt>contacto</a>
                            </li>
                            <!-- end menu item -->
                            <!-- start menu item -->
                            <li class="d-sm-block d-xs-block d-md-none d-lg-none d-xl-none">
                                <a href="index.html" rel="noreferrer">English</a>
                            </li>
                            <!-- end menu item -->
                            <!-- start menu item -->
                            <li class="d-sm-block d-xs-block d-md-none d-lg-none d-xl-none">
                                <a href="index_ES.html" rel="noreferrer">Español</a>
                            </li>
                            <!-- end menu item -->
                        </ul>
                    </div>
                </div>
                <div class="col-auto pe-0 text-very-light-gray">
                    <div class="header-social-icon d-none d-md-inline-block">
                        <i class="fa fa-globe-americas text-white" aria-hidden="true"></i>&nbsp;&nbsp;
                        <a href="index.html" title="English"
                            rel="noreferrer">EN</a>
                        &nbsp;&nbsp;&nbsp;<a style="color: #b7b7b7" class="text-decoration-underline" href="index_ES.html" title="Español" rel="noreferrer">ES</a>
                    </div>
                </div>
        </nav>
        <!-- end navigation -->
    </header>
        `;
    }

}
customElements.define('my-header', MyHeader)

/* FOOTER */
class MyFooter extends HTMLElement{

    connectedCallback() {

        this.innerHTML = `
        <footer
        class="footer-classic-dark bg-extra-dark-gray padding-five-bottom sm-padding-30px-bottom wow animate__fadeInUp">
        <div class="container">
            <div class="footer-bottom border-color-medium-dark-gray padding-50px-top">
                <div class="row">
                    <!-- start copyright -->
                    <div class="col-lg-6 col-md-6 text-normal text-md-start text-center">
                        <a href="mailto:verastegui.peter@gmail.com"><i
                                class="fab ti-email"></i>&nbsp;&nbsp;verastegui.peter@gmail.com</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                        <a href="https://wa.me/15712951415"><i class="fab fa-whatsapp"></i>&nbsp;+1 571 295 1415</a>
                    </div>
                    <div class="col-lg-6 col-md-6 text-normal text-md-end text-center sm-padding-15px-top">
                        &COPY;&nbsp;<span id="copyYear"></span> Edwin Peter Verastegui
                        Guasace</div>
                    <!-- end copyright -->
                </div>
            </div>
        </div>
    </footer>
        `;
    }

}
customElements.define('my-footer', MyFooter)

/* AUTOMATIC UPDATE OF YEAR */
var currentYear = new Date().getFullYear();
document.getElementById("copyYear").innerHTML = currentYear;

/* All PROJECTS Has no-padding-bottom */
class AllProjects extends HTMLElement{

    connectedCallback() {

        this.innerHTML = `
        <section id="projects" class="py-0">
            <div class="container wow animate__fadeIn padding-90px-top background-black md-padding-50px-top md-padding-50px-bottom sm-padding-30px-top sm-padding-30px-bottom" data-wow-delay="2.0s">
        
                <div class="row">
                    <div class="col-12 filter-content overflow-hidden">
                        <h6
                            class="alt-font text-extra-dark-gray font-weight-400 letter-spacing-1 text-white text-center mb-6 pb-4">
                            PROYECTOS
                        </h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 filter-content overflow-hidden">
                        <ul
                            class="hover-option6 lightbox-portfolio portfolio-wrapper grid grid-loading grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-medium">
                            <li class="grid-sizer"></li>
        
                            <!-- start portfolio-item item -->
                            <li class="design web photography grid-item wow animate__fadeInUp last-paragraph-no-margin">
        
                                <figure>
        
                                    <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                        <img src="images/projects/Ichapekene-Piesta/L1000663.jpg" alt="Dylan the cool kid" />
                                        <div class="portfolio-icon">
                                            <a href="Ichapekene-Piesta_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                                    aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <a href="Ichapekene-Piesta_ES.html">
                                        <figcaption class="bg-white">
                                            <div class="portfolio-hover-main text-center">
                                                <div class="portfolio-hover-box align-middle">
                                                    <div class="portfolio-hover-content position-relative">
                                                        <span
                                                            class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Ichapekene
                                                            Piesta Inasianuana</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </a>
        
                                </figure>
        
                            </li>
                            <!-- end portfolio item -->
        
                            <!-- start portfolio-item item -->
                            <li class="design web photography grid-item wow animate__fadeInUp last-paragraph-no-margin">
                                <figure>
                                    <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                        <img src="images/projects/Portraits/L100066X.jpg" alt="Dylan the cool kid" />
                                        <div class="portfolio-icon">
                                            <a href="portraits_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                                    aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <a href="portraits_ES.html">
                                        <figcaption class="bg-white">
                                            <div class="portfolio-hover-main text-center">
                                                <div class="portfolio-hover-box align-middle">
                                                    <div class="portfolio-hover-content position-relative">
                                                        <span
                                                            class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Rostros
                                                            de personas</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </a>
                                </figure>
                            </li>
                            <!-- end portfolio item -->
                            <!-- start portfolio item -->
                            <li class="advertising grid-item wow animate__fadeInUp last-paragraph-no-margin"
                                data-wow-delay="0.2s">
                                <figure>
                                    <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                        <img src="images/projects/Newborn/L100066Z.jpg" alt="" />
                                        <div class="portfolio-icon">
                                            <a href="Newborn_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                                    aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <a href="Newborn_ES.html">
                                        <figcaption class="bg-white">
                                            <div class="portfolio-hover-main text-center">
                                                <div class="portfolio-hover-box align-middle">
                                                    <div class="portfolio-hover-content position-relative">
                                                        <span
                                                            class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Recién
                                                            Nacida</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </a>
                                </figure>
                            </li>
                            <!-- end portfolio item -->
                            <!-- start portfolio item -->
                            <li class="branding photography advertising web grid-item wow animate__fadeInUp last-paragraph-no-margin"
                                data-wow-delay="0.4s">
                                <figure>
                                    <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                        <img src="images/projects/A-place-I-used-to-call-home/L100066L.jpg" alt="" />
                                        <div class="portfolio-icon">
                                            <a href="a-place-I-used-to-call-home_ES.html"><i
                                                    class="fas fa-search text-extra-dark-gray" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <a href="a-place-I-used-to-call-home_ES.html">
                                        <figcaption class="bg-white">
                                            <div class="portfolio-hover-main text-center">
                                                <div class="portfolio-hover-box align-middle">
                                                    <div class="portfolio-hover-content position-relative">
                                                        <span
                                                            class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Un
                                                            lugar que solía ser mi hogar</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </a>
                                </figure>
        
                            </li>
                            <!-- end portfolio item -->
                            <!-- start portfolio item -->
                            <li class="branding photography advertising web grid-item wow animate__fadeInUp last-paragraph-no-margin"
                                data-wow-delay="0.4s">
                                <figure>
                                    <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                        <img src="images/projects/Londres/London_cover.jpg" alt="" />
                                        <div class="portfolio-icon">
                                            <a href="london_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                                    aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <a href="london_ES.html">
                                        <figcaption class="bg-white">
                                            <div class="portfolio-hover-main text-center">
                                                <div class="portfolio-hover-box align-middle">
                                                    <div class="portfolio-hover-content position-relative">
                                                        <span
                                                            class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Londres</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </a>
                                </figure>
                            </li>
                            <!-- end portfolio item -->
                                                <!-- start portfolio item -->
                    <li class="branding photography advertising web grid-item wow animate__fadeInUp last-paragraph-no-margin"
                        data-wow-delay="0.4s">
                        <figure>
                            <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                <img src="images/projects/Jamaica/Jamaica_cover.jpg" alt="Jamaica" />
                                <div class="portfolio-icon">
                                    <a href="jamaica_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="jamaica_ES.html">
                                <figcaption class="bg-white">
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <span
                                                    class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Jamaica</span>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </a>
                        </figure>
                    </li>
                    <!-- end portfolio item -->
                    <!-- start portfolio item -->
                    <li class="branding photography advertising web grid-item wow animate__fadeInUp last-paragraph-no-margin"
                        data-wow-delay="0.4s">
                        <figure>
                            <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                <img src="images/projects/United-States/NY/NY_cover.jpg" alt="Nueva York" />
                                <div class="portfolio-icon">
                                    <a href="New_York_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="New_York_ES.html">
                                <figcaption class="bg-white">
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <span
                                                    class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Nueva
                                                    York</span>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </a>
                        </figure>
                    </li>
                    <!-- end portfolio item -->
                    <!-- start portfolio item -->
                    <li class="branding photography advertising web grid-item wow animate__fadeInUp last-paragraph-no-margin"
                        data-wow-delay="0.4s">
                        <figure>
                            <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                <img src="images/projects/Madrid/Madrid-Cover.jpg" alt="Madrid" />
                                <div class="portfolio-icon">
                                    <a href="Madrid_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="Madrid_ES.html">
                                <figcaption class="bg-white">
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <span
                                                    class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Mi amigo de Madrid</span>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </a>
                        </figure>
                    </li>
                    <!-- end portfolio item -->
                        </ul>
                    </div>
                </div>
            </div>
        </section>
            `;
    }

}
customElements.define('all-projects', AllProjects)

/* OTHER PROJECTS Has padding-90px-bottom */
class OtherProjects extends HTMLElement{

    connectedCallback() {

        this.innerHTML = `
 
        <div class="container wow animate__fadeIn padding-90px-top padding-90px-bottom background-black md-padding-50px-top md-padding-50px-bottom sm-padding-30px-top sm-padding-30px-bottom"
            id="projects" data-wow-delay="2.0s">

                <div class="row">
                    <div class="col-12 filter-content overflow-hidden">
                        <h6 class="alt-font text-extra-dark-gray font-weight-400 letter-spacing-1 text-white text-center mb-6 pb-4">OTROS PROYECTOS
                        </h6>
                    </div>
                </div>
                <div class="row">
                <div class="col-12 filter-content overflow-hidden">
                <ul
                    class="hover-option6 lightbox-portfolio portfolio-wrapper grid grid-loading grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-medium">
                    <li class="grid-sizer"></li>

                    <!-- start portfolio-item item -->
                    <li class="design web photography grid-item wow animate__fadeInUp last-paragraph-no-margin">

                        <figure>

                            <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                <img src="images/projects/Ichapekene-Piesta/L1000663.jpg"
                                    alt="Dylan the cool kid" />
                                <div class="portfolio-icon">
                                    <a href="Ichapekene-Piesta_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="Ichapekene-Piesta_ES.html">
                                <figcaption class="bg-white">
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <span
                                                    class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Ichapekene
                                                    Piesta Inasianuana</span>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </a>

                        </figure>

                    </li>
                    <!-- end portfolio item -->

                    <!-- start portfolio-item item -->
                    <li class="design web photography grid-item wow animate__fadeInUp last-paragraph-no-margin">
                        <figure>
                            <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                <img src="images/projects/Portraits/L100066X.jpg" alt="Dylan the cool kid" />
                                <div class="portfolio-icon">
                                    <a href="portraits_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="portraits_ES.html">
                                <figcaption class="bg-white">
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <span
                                                    class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Rostros de personas</span>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </a>
                        </figure>
                    </li>
                    <!-- end portfolio item -->
                    <!-- start portfolio item -->
                    <li class="advertising grid-item wow animate__fadeInUp last-paragraph-no-margin"
                        data-wow-delay="0.2s">
                        <figure>
                            <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                <img src="images/projects/Newborn/L100066Z.jpg" alt="" />
                                <div class="portfolio-icon">
                                    <a href="Newborn_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="Newborn_ES.html">
                                <figcaption class="bg-white">
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <span
                                                    class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Recién Nacida</span>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </a>
                        </figure>
                    </li>
                    <!-- end portfolio item -->
                    <!-- start portfolio item -->
                    <li class="branding photography advertising web grid-item wow animate__fadeInUp last-paragraph-no-margin"
                        data-wow-delay="0.4s">
                        <figure>
                            <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                <img src="images/projects/A-place-I-used-to-call-home/L100066L.jpg" alt="" />
                                <div class="portfolio-icon">
                                    <a href="a-place-I-used-to-call-home_ES.html"><i
                                            class="fas fa-search text-extra-dark-gray" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="a-place-I-used-to-call-home_ES.html">
                                <figcaption class="bg-white">
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <span
                                                    class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Un lugar que solía ser mi hogar</span>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </a>
                        </figure>

                    </li>
                    <!-- end portfolio item -->
                    <!-- start portfolio item -->
                    <li class="branding photography advertising web grid-item wow animate__fadeInUp last-paragraph-no-margin"
                        data-wow-delay="0.4s">
                        <figure>
                            <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                <img src="images/projects/Londres/London_cover.jpg" alt="" />
                                <div class="portfolio-icon">
                                    <a href="london_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="london_ES.html">
                                <figcaption class="bg-white">
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <span
                                                    class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Londres</span>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </a>
                        </figure>
                    </li>
                    <!-- end portfolio item -->
                    <!-- start portfolio item -->
                    <li class="branding photography advertising web grid-item wow animate__fadeInUp last-paragraph-no-margin"
                        data-wow-delay="0.4s">
                        <figure>
                            <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                <img src="images/projects/Jamaica/Jamaica_cover.jpg" alt="Jamaica" />
                                <div class="portfolio-icon">
                                    <a href="jamaica_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="jamaica_ES.html">
                                <figcaption class="bg-white">
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <span
                                                    class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Jamaica</span>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </a>
                        </figure>
                    </li>
                    <!-- end portfolio item -->
                    <!-- start portfolio item -->
                    <li class="branding photography advertising web grid-item wow animate__fadeInUp last-paragraph-no-margin"
                        data-wow-delay="0.4s">
                        <figure>
                            <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                <img src="images/projects/United-States/NY/NY_cover.jpg" alt="Nueva York" />
                                <div class="portfolio-icon">
                                    <a href="New_York_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="New_York_ES.html">
                                <figcaption class="bg-white">
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <span
                                                    class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Nueva
                                                    York</span>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </a>
                        </figure>
                    </li>
                    <!-- end portfolio item -->
                    <!-- start portfolio item -->
                    <li class="branding photography advertising web grid-item wow animate__fadeInUp last-paragraph-no-margin"
                        data-wow-delay="0.4s">
                        <figure>
                            <div class="portfolio-img bg-deep-pink position-relative text-center overflow-hidden">
                                <img src="images/projects/Madrid/Madrid-Cover.jpg" alt="Madrid" />
                                <div class="portfolio-icon">
                                    <a href="Madrid_ES.html"><i class="fas fa-search text-extra-dark-gray"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <a href="Madrid_ES.html">
                                <figcaption class="bg-white">
                                    <div class="portfolio-hover-main text-center">
                                        <div class="portfolio-hover-box align-middle">
                                            <div class="portfolio-hover-content position-relative">
                                                <span
                                                    class="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block">Mi amigo de Madrid</span>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </a>
                        </figure>
                    </li>
                    <!-- end portfolio item -->
                </ul>
            </div>
        </div>
    </div>

        `;
    }

}
customElements.define('other-projects', OtherProjects)



