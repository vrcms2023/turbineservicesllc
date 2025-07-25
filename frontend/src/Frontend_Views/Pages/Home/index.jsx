import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
// Components
import Title from "../../../Common/Title";
import Ancher from "../../../Common/Ancher";
import BriefIntroFrontend from "../../../Common/BriefIntro";
import Carousel from "../../Components/Carousel";
import Testimonials from "../../Components/Testimonials";
import ModelBg from "../../../Common/ModelBg";
import AdminBanner from "../../../Frontend_Admin/Components/forms/ImgTitleIntoForm-List";
import BriefIntroAdmin from "../../../Frontend_Admin/Components/BriefIntro/";
import EditIcon from "../../../Common/AdminEditIcon";
import ABrief from "../../Components/ABrief";
import ABriefAbout from "../../Components/ABriefAbout";
import HomeNews from "../../Components/HomeNews";

// Common Compoenents
import Banner from "../../../Common/Banner";
import { useAdminLoginStatus } from "../../../Common/customhook/useAdminLoginStatus";
import HomeServices from "../../Components/HomeServices";
import ServiceOfferedComponent from "../../Components/ServiceOfferedComponent";
import Features from "../../Components/Features";
import { ImageGalleryStyled } from "../../../Common/StyledComponents/Styled-ImageGallery";
import { HomeClientsStyled } from "../../../Common/StyledComponents/Styled-HomeClients";

// Utilities
import { axiosClientServiceApi } from "../../../util/axiosUtil";
import { removeActiveClass } from "../../../util/ulrUtil";
import { getObjectPositionKey, sortByFieldName, genereateCategoryProducts } from "../../../util/commonUtil";
import {
  getCarouselFields,
  getFormDynamicFields,
  getserviceOfferedFields,
  getTestimonialsFields,
  getTitleAndDescriptionFields,
  imageDimensionsJson,
} from "../../../util/dynamicFormFields";

// Styles
import "./Home.css";

// Images
import imgOngoing from "../../../Images/carousel1.jpg";
import imgCompleted from "../../../Images/carousel2.jpg";
import imgFuture from "../../../Images/carousel3.jpg";
import { ProductHilightsStyled } from "../../../Common/StyledComponents/Styled-Products-Hilights";
import { TestimonialCarouselPageStyled } from "../../../Common/StyledComponents/Styled-TestimonialCarousel";
import { RandomHomeServicesStyled } from "../../../Common/StyledComponents/Random-HomeServices";
import { ABriefIntroStyled } from "../../../Common/StyledComponents/Styled-ABriefAbout";
import { getAllCategories } from "../../../redux/products/categoryActions";
import Product from "../Products/Product";
import { SimpleTitleDescComponent } from "../../../Frontend_Admin/Components/BriefIntro/SimpleTitleDescComponent";
import DynamicForm from "../../../Frontend_Admin/Components/forms/DynamicForm";

import {
  createShowHideComponent,
  getAllShowHideComponentsList,
  getShowHideComponentsListByPage,
  updateShowHideComponent,
} from "../../../redux/showHideComponent/showHideActions";
import ImageInputsForm from "../../../Frontend_Admin/Components/forms/ImgTitleIntoForm";
import { HomeClientItem } from "../../Components/HomeClientItem";
import ShowHideToggle from "../../../Common/ShowHideToggle";
import HomeProjects from "../../Components/HomeProjects";
import HomeProjectCarousel from "../../Components/HomeProjectCarousel";
import HomeDynamicServices from "../../Components/HomeDynamicServices";
import { getObjectsByKey } from "../../../util/showHideComponentUtil";
import { HomeClientList } from "../../Components/HomeClientList";
import DownloadBrochures from "../../Components/DownloadBrochures";
import ListofTitleandDescription from "../../../Frontend_Admin/Components/forms/ListofTitleandDescription";
import { getHomeIntroList } from "../../../redux/homeintroList/homeIntroListActions";
import TitleWithDescripton from "../../Components/TitleWithDescripton";
import { HomeServiceStylesComponent } from "../../../Common/StyledComponents/Styled-HomeServices-Compoent";
import { HomeDynamicServiceStylesComponent } from "../../../Common/StyledComponents/Styled-HomeDynamicServices-Compoent";

import Button from "../../../Common/Button";
import WeServeCarousel from "../../Components/WeServeCarousel";

import { BrochureDownloadStyling } from "../../../Common/StyledComponents/Styled-BrochureDownload";
import { WeServedStyled } from "../../../Common/StyledComponents/Styled-WeServe-Component";
import { HomeProjectCauroselComponentStyles } from "../../../Common/StyledComponents/Styled-HomeProjectCarousel-Component";
import CounterForm from "../../../Frontend_Admin/Components/forms/CounterForm";
import CounterCompnentView from "../../../Common/CounterCompnentView";
import { CounterComponentStyles } from "../../../Common/StyledComponents/Styled-Count-Component";
import { HomeCauroselComponentStyles } from "../../../Common/StyledComponents/Styled-HomeCarousel";

const Home = () => {
  const editComponentObj = {
    carousel: false,
    briefIntro: false,
    homeServicebriefIntro: false,
    projects: false,
    projectsBrief: false,
    testmonial: false,
    serviceOffered: false,
    product_development: false,
    product_distribution: false,
    iconsHelightsBrief: false,
    projectbriefIntro: false,
    homeService0: false,
    homeService1: false,
    homeService2: false,
    homeService3: false,
    homeService4: false,
    homeService5: false,
    homeDynamciServices: false,
    homeDynamciServicesBrief: false,
    counterlist: false,
    trainings: false,
  };

  const productComp = {
    product_development: "product_development",
    product_distribution: "product_distribution",
    product_registration: "product_registration",
  };
  const [counter, setCounter] = useState(0);
  const pageType = "home";
  const serviceOffered = "serviceOffered";
  const [testimonis, setTestmonis] = useState([]);
  const { isAdmin, hasPermission } = useAdminLoginStatus();
  const [componentEdit, SetComponentEdit] = useState(editComponentObj);
  const [show, setShow] = useState(false);
  const [news, setNews] = useState([]);
  const [clientsList, setClientsList] = useState([]);
  const [homeCategoriesList, setHomeCategoriesList] = useState([]);
  const { categories } = useSelector((state) => state.categoryList);
  const { isLoading } = useSelector((state) => state.loader);
  const showHideCompPageLoad = useRef(true);

  const [productDevelopment, setProductDevelopment] = useState("");
  const [productDistribution, setProductDistribution] = useState("");
  const [productRegistration, setProductRegistration] = useState("");

  const [showHideCompList, setShowHideCompList] = useState([]);
  const { serviceMenu } = useSelector((state) => state.serviceMenu);
  const { homeIntroList } = useSelector((state) => state.homeIntroList);

  const dispatch = useDispatch();

  const editHandler = (name, value) => {
    SetComponentEdit((prevFormData) => ({ ...prevFormData, [name]: value }));
    setShow(value);
    document.body.style.overflow = "hidden";
  };

  const setResponseData = (data) => {
    if (data?.results.length > 0) {
      const _positionKey = getObjectPositionKey(data.results[0]);
      const _newslList = sortByFieldName(data.results, _positionKey);
      setNews(_newslList.slice(0, 4));
    } else {
      setNews([]);
    }
  };

  useEffect(() => {
    if (homeIntroList.length == 0) {
      dispatch(getHomeIntroList());
    }
  }, [homeIntroList?.length]);

  useEffect(() => {
    const getHomePageCategoryList = async () => {
      const ids = categories.map((item) => item.id);
      let categoryId = "";
      const arrURL = [];
      categories.forEach((item, index) => {
        arrURL.push(axiosClientServiceApi.get(`/products/getClinetProduct/${item.id}/`));
      });

      await Promise.all(arrURL).then(function (values) {
        const result = genereateCategoryProducts(values, categories);
        setHomeCategoriesList(result);
      });
    };

    if (categories?.length > 0 && homeCategoriesList?.length === 0) {
      getHomePageCategoryList();
    }
  }, [categories]);

  useEffect(() => {
    removeActiveClass();
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    const getTestimonial = async () => {
      try {
        const response = await axiosClientServiceApi.get(`/testimonials/clientTestimonials/`);
        if (response?.status === 200) {
          const _testimonialsList = sortByFieldName(response.data.results, "testimonial_position");
          setTestmonis(_testimonialsList);
        }
      } catch (e) {
        console.log("unable to access ulr because of server is down");
      }
    };
    if (!componentEdit.testmonial) {
      getTestimonial();
    }
  }, [componentEdit.testmonial]);

  useEffect(() => {
    const getClientList = async () => {
      try {
        const response = await axiosClientServiceApi.get(`/client/getAllClientLogos/`);
        if (response?.status === 200) {
          const _clientList = sortByFieldName(response.data.clientLogo, "client_position");

          setClientsList(_clientList);
        }
      } catch (error) {
        console.log("unable to access ulr because of server is down");
      }
    };

    getClientList();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { error, success, showHideList } = useSelector((state) => state.showHide);

  useEffect(() => {
    if (showHideList.length > 0) {
      setShowHideCompList(getObjectsByKey(showHideList));
    }
  }, [showHideList]);

  const showHideHandler = async (id, compName) => {
    if (id) {
      dispatch(updateShowHideComponent(id));
    } else {
      const newData = {
        componentName: compName.toLowerCase(),
        pageType: pageType,
      };
      dispatch(createShowHideComponent(newData));
    }
  };

  const homeServices = [1, 2, 3, 4, 5, 6];

  /** End Visibility ON / OFF logic  */
  return (
    <>
      <div className="container-fluid p-0">
        {/* ==== Download Broucher ======================================== */}
        <BrochureDownloadStyling>
          <div className="homeBrochure">
            <DownloadBrochures />
          </div>
        </BrochureDownloadStyling>
        {/* ==== END ======================================== */}
        {/* BANNER COMPONENT START =========================================================================================================== */}
        <div className={showHideCompList?.banner?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.banner?.visibility}
              title={"HERO Banner"}
              componentName={"banner"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.banner?.id}
            />
          )}

          {showHideCompList?.banner?.visibility && (
            <>
              <div className="row">
                <div className="col-md-12 p-0 position-relative homePage">
                  {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("banner", true)} editlabel="Banner" />}
                  <Banner getBannerAPIURL={`banner/clientBannerIntro/${pageType}-banner/`} bannerState={componentEdit.banner} />
                </div>
              </div>
              {componentEdit.banner && (
                <div className="adminEditTestmonial selected">
                  <ImageInputsForm
                    editHandler={editHandler}
                    componentType="banner"
                    pageType={`${pageType}-banner`}
                    imageLabel="Banner Image"
                    showDescription={false}
                    showExtraFormFields={getFormDynamicFields(`${pageType}-banner`)}
                    dimensions={imageDimensionsJson("banner")}
                  />
                </div>
              )}
            </>
          )}
        </div>
        {/* BANNER COMPONENT END =========================================================================================================== */}

        {/* ==== CAROUSEL COMPONENT  ===================================== */}
        <div className={showHideCompList?.carousel?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.carousel?.visibility}
              title={"HERO Carousel"}
              componentName={"carousel"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.carousel?.id}
            />
          )}
          {showHideCompList?.carousel?.visibility && (
            <>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 p-0 carousel">
                    {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("carousel", true)} editlabel="Carousel" />}
                    <HomeCauroselComponentStyles>
                      <Carousel carouselState={componentEdit.carousel} category={"carousel"} containerId="carouselHomeGallery" />
                    </HomeCauroselComponentStyles>
                  </div>
                </div>
              </div>

              {componentEdit.carousel && (
                <div className={`adminEditTestmonial selected `}>
                  <AdminBanner
                    editHandler={editHandler}
                    componentType="carousel"
                    popupTitle="Hero Carousel"
                    getImageListURL="carousel/createCarousel/carousel/"
                    deleteImageURL="carousel/updateCarousel/"
                    imagePostURL="carousel/createCarousel/carousel/"
                    imageUpdateURL="carousel/updateCarousel/"
                    imageIndexURL="carousel/updateCarouselindex/"
                    imageLabel="Add Image"
                    showDescription={false}
                    showExtraFormFields={getCarouselFields("carousel")}
                    dimensions={imageDimensionsJson("carousel")}
                  />
                </div>
              )}
            </>
          )}
        </div>
        {/* ==== END CAROUSEL =============================== */}

        {/* BRIEF INTRODUCTION ========================================= */}
        <div className={showHideCompList?.briefintro?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.briefintro?.visibility}
              title={"A Brief Introduction Component"}
              componentName={"briefintro"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.briefintro?.id}
            />
          )}

          {showHideCompList?.briefintro?.visibility && (
            <div className="homeBriefIntroduction">
              <div className="container">
                <div className="row">
                  {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("briefIntro", true)} editlabel="Brief" />}

                  <BriefIntroFrontend
                    introState={componentEdit.briefIntro}
                    linkCss="btn btn-outline d-flex justify-content-center align-items-center gap-3"
                    linkLabel="Read More"
                    moreLink=""
                    introTitleCss="text-center"
                    introSubTitleCss="mt-2 text-center"
                    introDecTitleCss="fw-normal mx-4 text-center lh-6"
                    detailsContainerCss="col-md-10 offset-md-1"
                    anchorContainer="d-flex justify-content-center align-items-center mt-4"
                    anchersvgColor="#17427C"
                    pageType={pageType}
                  />
                </div>
              </div>

              {componentEdit.briefIntro && (
                <div className={`adminEditTestmonial selected `}>
                  <BriefIntroAdmin editHandler={editHandler} componentType="briefIntro" popupTitle="Brief Intro Banner" pageType="Home" />
                </div>
              )}
            </div>
          )}
        </div>
        {/* ==== END ===================================================== */}

        {/* ==== PROJECT + BRIEF INTRODUCTION START ===================================================================================================== */}

        <div className={showHideCompList?.hprinfra?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          <div className="commonBg homeProjectsContainer">
            {isAdmin && hasPermission && (
              <ShowHideToggle
                showhideStatus={showHideCompList?.hprinfra?.visibility}
                title={"Projects coming form project dashboard - olny 3"}
                componentName={"hprinfra"}
                showHideHandler={showHideHandler}
                id={showHideCompList?.hprinfra?.id}
              />
            )}
            {showHideCompList?.hprinfra?.visibility && (
              <>
                <div>
                  <div className="container">
                    <div className="row">
                      <div className="breiftopMargin">
                        {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("projectbriefIntro", true)} editlabel="Projects" />}

                        <BriefIntroFrontend
                          introState={componentEdit.projectbriefIntro}
                          linkCss="btn btn-outline d-flex justify-content-center align-items-center gap-3"
                          linkLabel="Read More"
                          moreLink=""
                          introTitleCss="text-center"
                          introSubTitleCss="text-center"
                          introDecTitleCss="fs-6 fw-normal mx-4 text-center lh-6"
                          detailsContainerCss="col-md-12 pt-3"
                          anchorContainer="d-flex justify-content-center align-items-center mt-4"
                          anchersvgColor="#17427C"
                          pageType={`${pageType}projectbriefIntro`}
                        />
                      </div>
                    </div>
                  </div>

                  {componentEdit.projectbriefIntro && (
                    <div className={`adminEditTestmonial selected `}>
                      <BriefIntroAdmin
                        editHandler={editHandler}
                        componentType="projectbriefIntro"
                        popupTitle="Brief Intro Banner"
                        pageType={`${pageType}projectbriefIntro`}
                      />
                    </div>
                  )}
                </div>
                <HomeProjects />
              </>
            )}
          </div>
        </div>
        {/* ==== PROJECT END ===================================================================================================== */}

        {/* Dynamic ALL SERVICES ============================ */}
        <div className={showHideCompList?.homedynamciservicesbrief?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.homedynamciservicesbrief?.visibility}
              title={"Services coming from service page - max 6 "}
              componentName={"homedynamciservicesbrief"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.homedynamciservicesbrief?.id}
            />
          )}
          {showHideCompList?.homedynamciservicesbrief?.visibility && (
            <HomeDynamicServiceStylesComponent>
              <div className="homeDynamciServicesIntro">
                <div className="container">
                  <div className="breiftopMargin col-md-10 offset-md-1">
                    {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("homeDynamciServicesBrief", true)} />}

                    <BriefIntroFrontend
                      introState={componentEdit.homeDynamciServicesBrief}
                      linkCss="btn btn-outline d-flex justify-content-center align-items-center gap-3"
                      linkLabel="Read More"
                      moreLink=""
                      introTitleCss="text-center"
                      introSubTitleCss="fw-medium text-muted text-center"
                      introDecTitleCss="fs-6 fw-normal mx-4 text-center"
                      detailsContainerCss="col-md-12"
                      anchorContainer="d-flex justify-content-center align-items-center mt-4"
                      anchersvgColor="#17427C"
                      pageType={"homeDynamciServicesBrief"}
                      maxHeight="300"
                    />

                    {componentEdit.homeDynamciServicesBrief && (
                      <div className={`adminEditTestmonial selected `}>
                        <BriefIntroAdmin
                          editHandler={editHandler}
                          componentType="homeDynamciServicesBrief"
                          popupTitle="Brief Intro Banner"
                          pageType="homeDynamciServicesBrief"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="container-fluid homeDynamciServices py-5">
                  <div className="container">
                    <div className="row">
                      <HomeServices />
                    </div>
                  </div>
                </div>
              </div>
            </HomeDynamicServiceStylesComponent>
          )}
        </div>
        {/* END OF Dynamic ALL SERVICES */}

        {/* ======================= HOME List of Services ======================= */}
        <div className={showHideCompList?.homeservices?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.homeservices?.visibility}
              title={"Turbin Trainings"}
              componentName={"homeservices"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.homeservices?.id}
            />
          )}
          {showHideCompList?.homeservices?.visibility && (
            <HomeServiceStylesComponent>
              <div className="container-fluid homeServicesBrief">
                <div className="container">
                  <div className="row">
                    <div className="breiftopMargin">
                      {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("homeServicebriefIntro", true)} editlabel="Services" />}

                      <BriefIntroFrontend
                        introState={componentEdit.homeServicebriefIntro}
                        linkCss="btn btn-outline d-flex justify-content-center align-items-center gap-3"
                        linkLabel="Read More"
                        moreLink=""
                        introTitleCss="text-center"
                        introSubTitleCss="text-center"
                        introDecTitleCss="fs-6 fw-normal mx-4 text-center lh-6"
                        detailsContainerCss="col-md-12"
                        anchorContainer="d-flex justify-content-center align-items-center mt-4"
                        anchersvgColor="#17427C"
                        pageType="HomeserviceBrief"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="homeServicesContainer">
                <div className="container py-5 homeServices">
                  {/* <h2 className="mb-5">What We Do</h2> */}
                  {/* <HomeServices /> */}
                  {homeServices.map((service, i) => (
                    <div className="col-sm-6 col-md-4" key={i}>
                      <HomeDynamicServices
                        key={i}
                        editHandler={editHandler}
                        objectstatus={componentEdit[`homeService${i}`]}
                        pageType={`homeService${i}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {componentEdit.homeServicebriefIntro && (
                <div className={`adminEditTestmonial selected `}>
                  <BriefIntroAdmin
                    editHandler={editHandler}
                    componentType="homeServicebriefIntro"
                    popupTitle="Brief Intro Banner"
                    pageType="HomeserviceBrief"
                  />
                </div>
              )}
            </HomeServiceStylesComponent>
          )}
        </div>
        {/* DYNAMIC SERVICE END  ===================================== */}

        {/* ICONS HEILIGHT START ================================= */}
        <div className={showHideCompList?.iconshelightsbrief?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.iconshelightsbrief?.visibility}
              title={"Icons Brief"}
              componentName={"iconshelightsbrief"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.iconshelightsbrief?.id}
            />
          )}
          {showHideCompList?.iconshelightsbrief?.visibility && (
            <div className="homeBriefheilights">
              <div className="container">
                <div className="row">
                  <div className="breiftopMargin">
                    {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("iconsHelightsBrief", true)} editlabel="" />}

                    <BriefIntroFrontend
                      introState={componentEdit.iconsHelightsBrief}
                      linkCss="btn btn-outline d-flex justify-content-center align-items-center gap-3"
                      linkLabel="Read More"
                      moreLink=""
                      introTitleCss="fs-3 fw-bold text-center mb-4"
                      introSubTitleCss="fw-medium text-muted text-center"
                      introDecTitleCss="fs-6 fw-normal mx-4 text-center lh-6"
                      detailsContainerCss="col-md-12 py-3"
                      anchorContainer="d-flex justify-content-center align-items-center mt-4"
                      anchersvgColor="#17427C"
                      pageType={"iconsHelightsBrief"}
                    />

                    {componentEdit.iconsHelightsBrief && (
                      <div className={`adminEditTestmonial selected `}>
                        <BriefIntroAdmin
                          editHandler={editHandler}
                          componentType="iconsHelightsBrief"
                          popupTitle="Brief Intro Banner"
                          pageType="iconsHelightsBrief"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* END OF ICONS HEILIGHT ========================= */}

        {/* ==== HOME PROJECT CAROUSEL START ===================================================================================================== */}
        <div className={showHideCompList?.homeprojectcarousel?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.homeprojectcarousel?.visibility}
              title={"Home Project Carousel"}
              componentName={"homeprojectcarousel"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.homeprojectcarousel?.id}
            />
          )}
          {showHideCompList?.homeprojectcarousel?.visibility && <HomeProjectCarousel />}
        </div>

        {/* END HOME PROJECT CAROUSEL ============================== */}

        {/* ==== Trainings COMPONENT START ====================================================================================================*/}
        <div className={showHideCompList?.trainings?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.trainings?.visibility}
              title={"Corporate Training"}
              componentName={"trainings"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.trainings?.id}
            />
          )}

          {showHideCompList?.trainings?.visibility && (
            <TestimonialCarouselPageStyled>
              <div className="container-fluid testimonialsContainer">
                {/* <div className="row">
                  <div className="col-md-12">
                    <Title
                      title="Corporate Training"
                      cssClass="fs-1 fw-bold text-center my-5 text-uppercase"
                    />
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-md-12 col-lg-8 offset-lg-2 testimonials text-center">
                    {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("trainings", true)} editlabel="" />}

                    {homeIntroList.length > 0 && <TitleWithDescripton list={homeIntroList} />}
                  </div>
                  {componentEdit.testmonial && (
                    <div className={`adminEditTestmonial selected `}>
                      <ListofTitleandDescription
                        editHandler={editHandler}
                        componentType="trainings"
                        popupTitle={`Corporate Training`}
                        homeintros={homeIntroList}
                        pageType={`trainings`}
                      />
                    </div>
                  )}
                </div>
              </div>
            </TestimonialCarouselPageStyled>
          )}
        </div>
        {/* END OF Trainings COMPONENT =========================================================================================================== */}

        {/* ==== TESTIMONIAL COMPONENT START ====================================================================================================*/}
        <div className={showHideCompList?.testimonis?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.testimonis?.visibility}
              title={"Testimonials"}
              componentName={"testimonis"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.testimonis?.id}
            />
          )}

          {showHideCompList?.testimonis?.visibility && (
            <TestimonialCarouselPageStyled>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <Title title="Testimonials" cssClass="fs-1 fw-bold text-center my-5 text-uppercase" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 testimonials text-center">
                    {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("testmonial", true)} />}

                    {testimonis.length < 1 ? (
                      (testimonis.length, "No Testimonials Found")
                    ) : testimonis.length === 1 ? (
                      <h4>Please add 2 or more testimonials.</h4>
                    ) : testimonis.length > 1 ? (
                      <Testimonials testimonis={testimonis} />
                    ) : (
                      ""
                    )}
                  </div>
                  {componentEdit.testmonial && (
                    <div className={`adminEditTestmonial selected `}>
                      <AdminBanner
                        editHandler={editHandler}
                        componentType="testmonial"
                        popupTitle={`Testmonial Banner`}
                        getImageListURL="testimonials/clientTestimonials/"
                        deleteImageURL="testimonials/updateTestimonials/"
                        imagePostURL="testimonials/createTestimonials/"
                        imageUpdateURL="testimonials/updateTestimonials/"
                        imageIndexURL="testimonials/updateTestimonialsindex/"
                        imageLabel="Add your Image"
                        titleTitle="Testmonial Name"
                        descriptionTitle="Testimonial Writeup "
                        showDescription={false}
                        showExtraFormFields={getTestimonialsFields("testmonial")}
                        dimensions={imageDimensionsJson("testimonial")}
                      />
                    </div>
                  )}
                </div>
              </div>
            </TestimonialCarouselPageStyled>
          )}
        </div>
        {/* END OF TESTIMONIAL COMPONENT =========================================================================================================== */}

        {/* === CLIENTS - SCROLL START ===========================================================================  */}
        <div className={showHideCompList?.homeclient?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.homeclient?.visibility}
              title={"Home Client"}
              componentName={"homeclient"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.homeclient?.id}
            />
          )}
          {showHideCompList?.homeclient?.visibility && (
            <HomeClientsStyled>
              <HomeClientList clientsList={clientsList} />
            </HomeClientsStyled>
          )}
        </div>

        {/* === CLIENTS - COMPONENTS DEVELOPER IN SAP DESIGNS END ===========================================================================  */}

        {/* COUNTER COMPONENT START =========================================================================================================== */}
        <div className={showHideCompList?.counterlist?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.counterlist?.visibility}
              title={"Counter Component"}
              componentName={"counterlist"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.counterlist?.id}
            />
          )}

          {showHideCompList?.counterlist?.visibility && (
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 p-0 ">
                  {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("counterlist", true)} />}
                  <CounterComponentStyles>
                    <CounterCompnentView getDataAPIURL={`counter/getClientCounterSet/`} componentState={componentEdit.counterlist} />
                  </CounterComponentStyles>
                </div>
              </div>
              {componentEdit.counterlist && (
                <div className="adminEditTestmonial selected">
                  <CounterForm
                    editHandler={editHandler}
                    componentType={"counterlist"}
                    componentTitle="Counter component"
                    formPostURL={`/counter/create/`}
                    formUpdateURL={`/counter/updateCounterlist/`}
                    getDataAPIURL={`/counter/getClientCounterSet/`}
                    componentState={componentEdit.counterlist}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        {/* === END COUNTER =========================================================================================================== */}

        {/* ==== INDUSTRIES WE SERVE - START ======================================================================================================= */}
        <div className={showHideCompList?.industriesweserve?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.industriesweserve?.visibility}
              title={"Industries We Serve"}
              componentName={"industriesweserve"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.industriesweserve?.id}
            />
          )}
          {showHideCompList?.industriesweserve?.visibility && (
            <>
              <div className="container pt-5">
                <div className="breiftopMargin">
                  {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("industriesweserveBrief", true)} />}

                  <BriefIntroFrontend
                    introState={componentEdit.industriesweserveBrief}
                    linkCss="btn btn-outline d-flex justify-content-center align-items-center gap-3"
                    linkLabel="Read More"
                    moreLink=""
                    introTitleCss="mb-0 text-center fw-medium"
                    introSubTitleCss="fw-medium text-muted text-center"
                    introDecTitleCss="fs-6 fw-normal mx-4 text-center"
                    detailsContainerCss="col-md-12"
                    anchorContainer="d-flex justify-content-center align-items-center mt-4"
                    anchersvgColor="#17427C"
                    pageType={"industriesweserveBrief"}
                    maxHeight="300"
                  />

                  {componentEdit.industriesweserveBrief && (
                    <div className={`adminEditTestmonial selected `}>
                      <BriefIntroAdmin
                        editHandler={editHandler}
                        componentType="industriesweserveBrief"
                        popupTitle="Brief Intro Banner"
                        pageType="industriesweserveBrief"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 p-0 carousel">
                    {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("industriesweserve", true)} />}

                    {/* <Carousel
                      carouselState={componentEdit.industriesweserve}
                      category={"industriesweserve"}
                      containerId="industriesweserve-carousel"
                    /> */}
                    <ImageGalleryStyled>
                      <div className="container-fluid">
                        <div className="row ">
                          <div className="col-md-10 offset-md-1 homeGalleryCarousel">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-12">
                                  <Carousel
                                    carouselState={componentEdit.industriesweserve}
                                    category={"industriesweserve"}
                                    containerId="industriesweserve-carousel"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ImageGalleryStyled>

                    {/* <WeServedStyled>
                      
                      <WeServeCarousel
                        carouselState={componentEdit.industriesweserve}
                        category={"industriesweserve"}
                        containerId="industriesweserve-carousel"
                      />
                    </WeServedStyled> */}
                  </div>
                </div>
              </div>

              {componentEdit.industriesweserve && (
                <div className={`adminEditTestmonial selected `}>
                  <AdminBanner
                    editHandler={editHandler}
                    componentType="industriesweserve"
                    popupTitle="Industries We Serve"
                    getImageListURL="carousel/createCarousel/industriesweserve/"
                    deleteImageURL="carousel/updateCarousel/"
                    imagePostURL="carousel/createCarousel/industriesweserve/"
                    imageUpdateURL="carousel/updateCarousel/"
                    imageIndexURL="carousel/updateCarouselindex/"
                    imageLabel="industries we serve"
                    showDescription={false}
                    showExtraFormFields={getCarouselFields("industriesweserve")}
                    dimensions={imageDimensionsJson("carousel")}
                  />
                </div>
              )}
            </>
          )}
        </div>
        {/* ==== CAROUSEL COMPONENT END ========================================================================================================= */}

        {/* LEON Pharma Products START =========================================================================================================== */}
        <div
          className={showHideCompList?.producthilight?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}
          style={showHideCompList?.producthilight?.visibility ? { height: "160px" } : {}}
        >
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.producthilight?.visibility}
              title={"Product highlight"}
              componentName={"producthilight"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.producthilight?.id}
            />
          )}
          {showHideCompList?.producthilight?.visibility && (
            <ProductHilightsStyled>
              <div className="container position-relative d-none d-md-block">
                <div className="row rounded-3 overflow-hidden position-absolute hiligntsContainer">
                  <div className="col-sm-4 p-4 p-lg-5 py-lg-4 ">
                    <div className="position-relative">
                      {isAdmin && hasPermission && (
                        <EditIcon editHandler={() => editHandler(productComp.product_development, true)} editlabel="Hilights" />
                      )}

                      <SimpleTitleDescComponent
                        formgetURL={`/carousel/clientHomeIntro/${productComp.product_development}/`}
                        componentEdit={componentEdit.product_development}
                        setFormValues={setProductDevelopment}
                        formvalues={productDevelopment}
                      />
                      {componentEdit.product_development && (
                        <div className={`adminEditTestmonial selected `}>
                          <DynamicForm
                            editHandler={editHandler}
                            componentType={productComp.product_development}
                            componentTitle="Product Development component"
                            formPostURL={`/carousel/createHomeIntro/`}
                            formUpdateURL={`/carousel/updateHomeIntro/`}
                            editObject={productDevelopment}
                            dynamicFormFields={getTitleAndDescriptionFields(productComp.product_development)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-4 p-4 p-lg-5 py-lg-4 ">
                    <div className="position-relative">
                      {isAdmin && hasPermission && (
                        <EditIcon editHandler={() => editHandler(productComp.product_distribution, true)} editlabel="Hilights" />
                      )}
                      <SimpleTitleDescComponent
                        formgetURL={`/carousel/clientHomeIntro/${productComp.product_distribution}/`}
                        componentEdit={componentEdit.product_distribution}
                        setFormValues={setProductDistribution}
                        formvalues={productDistribution}
                      />
                      {componentEdit.product_distribution && (
                        <div className={`adminEditTestmonial selected `}>
                          <DynamicForm
                            editHandler={editHandler}
                            componentType={productComp.product_distribution}
                            componentTitle="Product Distribution component"
                            formPostURL={`/carousel/createHomeIntro/`}
                            formUpdateURL={`/carousel/updateHomeIntro/`}
                            editObject={productDistribution}
                            dynamicFormFields={getTitleAndDescriptionFields(productComp.product_distribution)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-4 p-4 p-lg-5 py-lg-4 ">
                    <div className="position-relative">
                      {isAdmin && hasPermission && (
                        <EditIcon editHandler={() => editHandler(productComp.product_registration, true)} editlabel="Hilights" />
                      )}
                      <SimpleTitleDescComponent
                        formgetURL={`/carousel/clientHomeIntro/${productComp.product_registration}/`}
                        componentEdit={componentEdit.product_registration}
                        setFormValues={setProductRegistration}
                        formvalues={productRegistration}
                      />
                      {componentEdit.product_registration && (
                        <div className={`adminEditTestmonial selected `}>
                          <DynamicForm
                            editHandler={editHandler}
                            componentType={productComp.product_registration}
                            componentTitle="Product Distribution component"
                            formPostURL={`/carousel/createHomeIntro/`}
                            formUpdateURL={`/carousel/updateHomeIntro/`}
                            editObject={productRegistration}
                            dynamicFormFields={getTitleAndDescriptionFields(productComp.product_registration)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ProductHilightsStyled>
          )}
        </div>
        {/* LEON Pharma Products END =========================================================================================================== */}

        {/* === Random Hilights START =========================================================================================================== */}
        <div className={showHideCompList?.services?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.services?.visibility}
              title={"Image with Text description"}
              componentName={"services"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.services?.id}
            />
          )}
          {showHideCompList?.services?.visibility && (
            <ABriefIntroStyled>
              <h1 className="fs-1 fw-bold text-center text-uppercase">Image with Text description</h1>
              <div className="container-lg mx-0 mx-md-0 px-md-0 mx-lg-auto randomServices">
                <div className="row">
                  <ABriefAbout
                    col1="col-md-6 ps-sm-0"
                    col2="col-md-6 p-4 p-md-5 d-flex justify-content-center align-items-start flex-column"
                    cssClass="fs-3 mb-3 fw-bolder title"
                    imageClass="w-100 object-fit-cover imgStylingLeft shadow"
                    dimensions={imageDimensionsJson("whoweare")}
                    pageType={"productPortfolio"}
                    componentFlip={false}
                  />
                </div>

                <div className="row d-flex flex-row-reverse my-3 my-md-5">
                  <ABriefAbout
                    col1="col-md-6 pe-sm-0"
                    col2="col-md-6 p-4 p-md-5 d-flex justify-content-center align-items-start flex-column"
                    cssClass="fs-3 mb-3 fw-bolder title"
                    imageClass="w-100 object-fit-cover imgStylingRight shadow imgStyling"
                    dimensions={imageDimensionsJson("whoweare")}
                    pageType={"promoting"}
                    componentFlip={false}
                  />
                </div>
                <div className="row">
                  <ABriefAbout
                    col1="col-md-6 ps-sm-0"
                    col2="col-md-6 p-4 p-md-5 d-flex justify-content-center align-items-start flex-column"
                    cssClass="fs-3 mb-3 fw-bolder title"
                    imageClass="w-100 object-fit-cover imgStylingLeft shadow"
                    dimensions={imageDimensionsJson("whoweare")}
                    pageType={"whatwedo"}
                    componentFlip={false}
                  />
                </div>
              </div>
            </ABriefIntroStyled>
          )}
        </div>
        {/* END OF Random Hilights =========================================================================================================== */}

        {/* ==== PRODUCTS CATEGORIES  START ===================================================================================================== */}
        <div className={showHideCompList?.homeproducts?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.homeproducts?.visibility}
              title={"Home Products"}
              componentName={"homeproducts"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.homeproducts?.id}
            />
          )}
          {showHideCompList?.homeproducts?.visibility && (
            <div className="container">
              <Title title="Products" cssClass="fs-1 fw-bold text-center my-5 pt-0 pt-md-5 text-uppercase" />
              <div className="row">
                {homeCategoriesList.map(
                  (category) =>
                    category?.products?.length > 0 && (
                      <div key={category.id}>
                        <Product item={category.products[0]} categoryId={category.id} />
                      </div>
                    )
                )}
              </div>
            </div>
          )}
        </div>
        {/* END OF PRODUCTS CATEGORIES =========================================================================================================== */}

        {/* ==== Random Home Services START =================================================================================================*/}
        <div className={showHideCompList?.productslist?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.productslist?.visibility}
              title={"Product Details - static "}
              componentName={"productslist"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.productslist?.id}
            />
          )}
          {showHideCompList?.productslist?.visibility && (
            <RandomHomeServicesStyled>
              <div className="container py-5 randomServices">
                <div className="row">
                  <div className="col-md-6">
                    <img src={imgOngoing} alt="" className="w-100 shadow" />
                  </div>
                  <div className="col-md-6 p-3 p-md-5 d-flex flex-column justify-content-center">
                    <Title title="Product portfolio" cssClass="text-black fs-3 fw-medium" />
                    <p>
                      Through our relentless pursuit of quality and innovation, we have achieved several milestones that highlight our success in the
                      healthcare industry.
                    </p>
                    <Link to="" className="moreLink">
                      More...
                    </Link>
                  </div>
                </div>

                <div className="row my-2 my-md-5 d-flex flex-row flex-md-row-reverse">
                  <div className="col-md-6">
                    <img src={imgCompleted} alt="" className="w-100 shadow" />
                  </div>
                  <div className="col-md-6 p-3 p-md-5 d-flex flex-column justify-content-center">
                    <Title title="Promoting healt and well being" cssClass="text-black fs-3 fw-medium" />
                    <p>
                      Through our relentless pursuit of quality and innovation, we have achieved several milestones that highlight our success in the
                      healthcare industry.
                    </p>
                    <Link to="" className="moreLink">
                      More...
                    </Link>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <img src={imgFuture} alt="" className="w-100 shadow" />
                  </div>
                  <div className="col-md-6 p-3 p-md-5 d-flex flex-column justify-content-center">
                    <Title title="What we do" cssClass="text-black fs-3 fw-medium" />
                    <p>
                      Through our relentless pursuit of quality and innovation, we have achieved several milestones that highlight our success in the
                      healthcare industry.
                    </p>
                    <Link to="" className="moreLink">
                      More...
                    </Link>
                  </div>
                </div>
              </div>
            </RandomHomeServicesStyled>
          )}
        </div>
        {/* ==== Random Home Services END =================================================================================================*/}

        {/* HOME NEWS START =================================================================================================*/}
        <div className={showHideCompList?.news?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.news?.visibility}
              title={"News"}
              componentName={"news"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.news?.id}
            />
          )}
          {showHideCompList?.news?.visibility && (
            <div className="row py-5 homeNews">
              <div className="col-md-12 d-flex justify-content-center align-items-center">
                <div className="container">
                  <Title title="News" cssClass="fs-1 fw-bold text-center my-5 pt-0 pt-md-5 text-uppercase" />
                  <HomeNews news={news} setNews={setResponseData} pagetype={pageType} />

                  <div className="d-flex justify-content-center align-items-center mt-4">
                    {/* <Ancher
                  AncherLabel="Read more"
                  Ancherpath="/news"
                  AncherClass="btn btn-primary d-flex justify-content-center align-items-center "
                  AnchersvgColor="#17427C"
                />
                <Ancher
                  AncherLabel="Read more"
                  Ancherpath="/news"
                  AncherClass="btn btn-secondary d-flex justify-content-center align-items-center "
                  AnchersvgColor="#17427C"
                /> */}

                    <Ancher
                      AncherLabel="More Articles"
                      Ancherpath="/news"
                      AncherClass="btn btn-outline d-flex justify-content-center align-items-center "
                      AnchersvgColor="#17427C"
                    />

                    {/* <Ancher
                  AncherLabel="Read more"
                  Ancherpath="/news"
                  AncherClass="btn moreLink d-flex justify-content-center align-items-center "
                  AnchersvgColor="#17427C"
                /> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* END OF HOME NEWS START =================================================================================================*/}

        {/* ==== FEATURES SPECICALLY DEVELOPED FOR RISHISYSTEMS START ========================================================================== */}
        <div className={showHideCompList?.features?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.features?.visibility}
              title={"Features -  static"}
              componentName={"features"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.features?.id}
            />
          )}
          {showHideCompList?.features?.visibility && <Features />}
        </div>
        {/* ==== FEATURES SPECICALLY DEVELOPED FOR RISHISYSTEMS END ========================================================================== */}

        {/* ===== HOME WHY CHOOSE RISHSYSTEMS START ============================================================================================ */}
        <div className={showHideCompList?.news?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.whoweare?.visibility}
              title={"Who we are"}
              componentName={"whoweare"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.whoweare?.id}
            />
          )}
          {showHideCompList?.whoweare?.visibility && (
            <div className="row ABriefAbout mb-5">
              <ABriefAbout cssClass="mb-2 fw-bold title text-black" dimensions={imageDimensionsJson("whoweare")} />
            </div>
          )}
        </div>
        {/* ===== HOME WHY CHOOSE RISHSYSTEMS END ============================================================================================ */}

        {/* ==== HOME Services SPECICALLY DEVELOPED FOR RISHISYSTEMS START ==================================================================== */}

        <div className={showHideCompList?.homeservicedetails?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.homeservicedetails?.visibility}
              title={"Services Details - custom design"}
              componentName={"homeservicedetails"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.homeservicedetails?.id}
            />
          )}
          {showHideCompList?.homeservicedetails?.visibility && (
            <div className="row">
              <div className="col-md-12 ABrief">
                <ABrief cssClass="fw-bold title" dimensions={imageDimensionsJson("homeCareers")} />
              </div>
            </div>
          )}
        </div>
        {/* ==== HOME Services SPECICALLY DEVELOPED FOR RISHISYSTEMS END ==================================================================== */}

        {/* ==== HOME Careers START ========================================================================================================== */}
        <div className={showHideCompList?.homecareers?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.homecareers?.visibility}
              title={"Careers"}
              componentName={"homecareers"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.homecareers?.id}
            />
          )}
          {showHideCompList?.homecareers?.visibility && (
            <div className="row homeCareers py-5">
              <div className="col-lg-6"></div>
              <div className="col-md-12 col-lg-6 pe-lg-5">
                <BriefIntroFrontend
                  introState={componentEdit.briefIntro}
                  pageType="careers"
                  introTitleCss="fs-3 fw-medium text-md-center"
                  introSubTitleCss="fw-medium text-muted text-md-center"
                  introDecTitleCss="fs-6 fw-normal w-75 m-auto text-md-center"
                />
                <div className="bg-white px-5 pb-4 d-flex justify-content-center align-items-center">
                  <Ancher
                    AncherLabel="Careers"
                    Ancherpath="/careers"
                    AncherClass="btn btn-primary d-flex justify-content-center align-items-center gap-3 w-50"
                    AnchersvgColor="#ffffff"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        {/* ==== HOME Careers END ========================================================================================================== */}

        {/* ==== IMAGE GALLERY SPECIFICALLY DESIGNED FOR SAP DESIGN STUDIO START =============================================================== */}

        {/* It will be work only one carosel in the page */}
        <div className={showHideCompList?.gallery?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.gallery?.visibility}
              title={"Gallery"}
              componentName={"gallery"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.gallery?.id}
            />
          )}
          {showHideCompList?.gallery?.visibility && (
            <ImageGalleryStyled>
              <div className="text-center mb-5" style={{ marginTop: "100px" }}>
                <span className="fs-1 px-4 py-2" style={{ borderBottom: "1px solid #444444" }}>
                  View Gallery
                </span>
              </div>{" "}
              */}
              <>
                <div className="container">
                  <div className="row">
                    <div className="breiftopMargin">
                      {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("weserve", true)} />}

                      <BriefIntroFrontend
                        introState={componentEdit.weserve}
                        linkCss="btn btn-outline d-flex justify-content-center align-items-center gap-3"
                        linkLabel="Read More"
                        moreLink=""
                        introTitleCss="text-center mb-3"
                        introSubTitleCss="fw-medium fs-5 text-center"
                        introDecTitleCss="fs-6 fw-normal mx-4 text-center lh-6"
                        detailsContainerCss="col-md-12 py-2 text-center"
                        anchorContainer="d-flex justify-content-center align-items-center mt-4"
                        anchersvgColor="#17427C"
                        pageType={pageType}
                      />
                    </div>
                  </div>
                </div>

                {componentEdit.weserve && (
                  <div className={`adminEditTestmonial selected `}>
                    <BriefIntroAdmin editHandler={editHandler} componentType="weserve" popupTitle="Brief Intro Banner" pageType="Home" />
                  </div>
                )}
              </>
              <div className="container">
                <div className="row ">
                  <div className="col-md-10 offset-md-1 homeGalleryCarousel">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-10 offset-md-1">
                          <Carousel carouselState={componentEdit.carousel} category={"industriesweserve"} containerId="imageGallerycarousel" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-4 position-relative " style={{ marginTop: "200px" }}>
                <Link to="/imageGallery" className="btn btn-outline">
                  View All
                </Link>
              </div>
            </ImageGalleryStyled>
          )}
        </div>

        {/* ==== IMAGE GALLERY SPECIFICALLY DESIGNED FOR SAP DESIGN STUDIO END=============================================================== */}

        {/* == SAP DESIGN STUDIO START========================================================================================================== */}

        {/* SERVICES OFFERED COMPONENT -  DEVELOPED FOR SPECIFICALLY SAP DESIGNS */}
        <div className={showHideCompList?.servicesoffered?.visibility && isAdmin && hasPermission ? "border border-info mb-2" : ""}>
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.servicesoffered?.visibility}
              title={"Services Offered"}
              componentName={"servicesoffered"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.servicesoffered?.id}
            />
          )}
          {showHideCompList?.servicesoffered?.visibility && (
            <>
              <div className="text-center mb-5" style={{ marginTop: "100px" }}>
                <span className="fs-1 px-4 py-2" style={{ borderBottom: "1px solid #444444" }}>
                  Services Offered
                </span>
              </div>
              <div className="row">
                <div className="col-md-12 carousel">
                  {isAdmin && hasPermission && <EditIcon editHandler={() => editHandler("serviceOffered", true)} editlabel="" />}

                  <ServiceOfferedComponent getBannerAPIURL={`carousel/clientCarouselbyCategory/${serviceOffered}/`} componentEdit={componentEdit} />
                </div>
              </div>

              {componentEdit.serviceOffered && (
                <div className="adminEditTestmonial selected">
                  <AdminBanner
                    editHandler={editHandler}
                    componentType="serviceOffered"
                    getImageListURL={`carousel/getCarousel/${serviceOffered}/`}
                    deleteImageURL="carousel/updateCarousel/"
                    imagePostURL="carousel/createCarousel/"
                    imageUpdateURL="carousel/updateCarousel/"
                    imageIndexURL="carousel/updateCarouselindex/"
                    imageLabel="Add Images"
                    showDescription={false}
                    showExtraFormFields={getserviceOfferedFields(serviceOffered)}
                    dimensions={imageDimensionsJson("carousel")}
                  />
                </div>
              )}
            </>
          )}
        </div>
        {/* == SAP DESIGN STUDIO END========================================================================================================== */}

        {/* END OF SAP DESIGN STUDIO COMPONENTS */}

        {/* Projects + brief intro  */}

        {/* {showEditPop && <ModelBg />} */}

        {show && <ModelBg />}
      </div>
    </>
  );
};

export default Home;
