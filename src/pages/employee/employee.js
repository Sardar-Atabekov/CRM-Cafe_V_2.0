import React, { useEffect, useState } from "react";
import { getData } from "../../functions/requests";
import Title from "../../components/title/title";
import phoneIcon from "./../../assets/icons/phone.svg";
import Loading from "../../components/loading/loading";
import downloadIcon from "./../../assets/img/Group 115.png";
import EllipseImg from "./../../assets/img/Ellipse 40.png";
import summaryIcon from "./../../assets/icons//summary.svg";
import telegramIcon from "./../../assets/icons/telegram.svg";
import ImgBlock from "../../components/img-block/img-block";
import { userStatus, projectType } from "../../constants/status";
import mailSendIcon from "./../../assets/icons/bx-mail-send.svg";
import { Link } from "react-router-dom";
import "./employee.css";

const EmployeePage = (props) => {
  const [tests, setTests] = useState([]);
  const [roles, setRoles] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [roleLoading, setRolesLoading] = useState(false);
  // const userRights = JSON.parse(localStorage.getItem("neobisHUBDate"));

  useEffect(() => {
    getData(`staff/${props.match.params.id}/`).then((res) => {
      setEmployeeData(res);
      setLoading(true);
      // setTests(res.progress);
    });
  }, [props.match.params.id]);

  // const userRole = (roleId) => {
  //   return roles.filter((role) => role.id === roleId)[0]
  //     ? roles.filter((role) => role.id === roleId)[0].name
  //     : "Удаленная роль";
  // };

  console.log("employeeData", employeeData);
  return (
    <div className="wrapper">
      {loading ? (
        <>
          <Title
            link={
              // userRights.change_user || userRights.add_study_plan?
              `/edit-employee/${employeeData._id}/`
              // : false
            }
          >
            Карточка пользователя
          </Title>
          <div>
            <div className="d-flex mt-5 user-info-block">
              <ImgBlock
                src={employeeData.photo ? employeeData.photo : EllipseImg}
                className="user-photo"
                alt="EllipseImg"
              />
              <div className="user-info">
                <h4 className="user-name">
                  {employeeData.name} {employeeData.surname}{" "}
                </h4>
                <b className="user-departmentName">{employeeData.post}</b>
                <span className="user-status">{employeeData.login}</span>
              </div>
              <div className="user-contacts">
                {/* <a className="contact-block" href={`mailto:${employeeData.email}`}>
                  <img src={mailSendIcon} alt="mailSendIcon" />
                  <span> {employeeData.email}</span>
                </a> */}
                {employeeData.phoneNumber ? (
                  <a
                    className="contact-block"
                    href={`tel:${employeeData.phoneNumber}`}
                  >
                    <img src={phoneIcon} alt="phoneIcon" />{" "}
                    <span>{employeeData.phoneNumber}</span>
                  </a>
                ) : null}
                {employeeData.telegram ? (
                  <a
                    className="contact-block"
                    href={employeeData.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={telegramIcon} alt="telegramIcon" />
                    <span>{employeeData.telegram}</span>
                  </a>
                ) : null}
              </div>
              <div className="p-4">
                {employeeData.summary && (
                  <a
                    className="contact-block"
                    href={employeeData.summary}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={summaryIcon} alt="summaryIcon" />
                    <span>Резюме</span>
                  </a>
                )}
              </div>
            </div>
            <div className="d-flex mt-4">
              <div className="w-70">
                {/* <span className="user-info-title">Проекты</span>
                <div className="user-projects">
                  {employeeData.projects.map((project) => (
                    <Link
                      key={project.project}
                      to={`/project/${project.project}`}
                      className="project"
                    >
                      <div className="flex-start project-block">
                        <img
                          src={
                            project.project_logo
                              ? project.project_logo
                              : downloadIcon
                          }
                          alt={project.name}
                          className="projectIcon"
                        />
                        <div className="project-description text-left">
                          <h5 className="project-name">{project.name}</h5>
                          <span className="project-span">
                            {
                              projectType[
                                project.project_type ? project.project_type : 1
                              ]
                            }
                          </span>
                        </div>
                        <span className={`project-status a`}>Активный</span>
                      </div>
                      <div className="user-role">
                        <span className="userRole-icon">
                          <img
                            src={
                              project.user_role_logo
                                ? project.user_role_logo
                                : downloadIcon
                            }
                            alt="role"
                          />
                        </span>
                        <span className="project-span">
                          {userRole(project.user_role)}
                        </span>
                      </div>

                      <div className="line-status mt-0">
                        <span className="percentage">100%</span>
                      </div>
                    </Link>
                  ))}
                </div> */}
              </div>
              {/* <div>
                <span className="user-info-title">Стади план</span>
                <div className="pt-4">
                  <div className="mt-4">
                    <TestBlock tests={tests} className="box-shadow" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default EmployeePage;
