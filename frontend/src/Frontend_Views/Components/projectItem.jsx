import React from "react";
import Title from "../../Common/Title";
import { useNavigate } from "react-router-dom";
import { getBaseURL } from "../../util/ulrUtil";

const ProjectItem = ({ projectList, projectType }) => {
  const navigate = useNavigate();
  const baseURL = getBaseURL();
  return (

      <div className="container mb-3">
        <div className="row">
          <div className="col-md-12 ">
            <Title
              title={
                projectList.length > 0
                  ? projectList[0].projectCategoryName
                  : "Ongoing Projects"
              }
              cssClass="blue-900 fs-5 mb-2"
            />
          </div>
        </div>
        <div className="row">
          {projectList.length > 0
            ? projectList.map((project) => (
                <div className="col-md-3 mb-3" key={project.id}>
                  <div className="position-relative box">
                    <div className="infoStrip">
                      <Title
                        title={project.projectTitle}
                        cssClass="text-white fs-5"
                      />
                      {/* <Link to="" className="blue-900">
                      more details
                    </Link> */}
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() =>
                          navigate("/project-details", {
                            state: {
                              selectedPorject: projectType,
                              projectid: project.id,
                            },
                          })
                        }
                      >
                        more details
                      </button>
                    </div>
                    {project.imgs.length > 0 ? (
                      <img src={`${baseURL}${project.imgs[0].path}`} alt="" />
                    ) : (
                      <img
                        src={`${baseURL}/media/images/dummy-image-square.png`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              ))
            : ""}
        </div>
        {/* {projectList.length > 3 ? (
          <div className="row mt-3">
            <div className="col-md-12 text-center py-3">
              <Link to="" className="loadMore">
                LOAD MORE
                <svg
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-2"
                >
                  <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5H14V3.5H0V4.5Z" />
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )} */}
      </div>
    
  );
};

export default ProjectItem;
