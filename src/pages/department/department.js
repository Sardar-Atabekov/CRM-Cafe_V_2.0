import React, { useEffect, useState } from "react";
import { getData } from "../../functions/requests";
import Title from "./../../components/title/title";
import { userStatus } from "./../../constants/status";
import Loading from "../../components/loading/loading";
import sortsIcon from "./../../assets/icons/Polygon 5.png";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import "./department.css";

function DepartmentPage(props) {
  const [role, setRole] = useState("all");
  const [users, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [department, setDepartment] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [sortActiveProjects, setSortActiveProjects] = useState(false);
  const [sortFinishedProjects, setSortFinishedProjects] = useState(false);
  // console.log('role', role);
  // console.log('users', users);
  // console.log('department', department);

  const userRights = JSON.parse(localStorage.getItem("neobisHUBDate"));

  useEffect(function () {
    getData(`department/${props.match.params.id}/`).then(function (res) {
      setDepartment(res);
      setLoading(true);
      setFilterData(res.users);
      setUsersData(res.users);
    });
  }, [props.match.params.id]);

  useEffect(function () {
    var filteredData = [];
    if (role === "all") {
      filteredData = filterData;
    } else {
      filteredData = filterData.filter(function (user) {
        return user.status === role;
      });
    }

    // setUsersData([...filteredData]);
    setUsersData([].concat(filteredData));
  }, [role, filterData]);

  useEffect(function () {
    var filteredUsers = users.sort(function (a, b) {
      return a.active_projects_count - b.active_projects_count;
    });
    filteredUsers = sortActiveProjects
      ? filteredUsers
      : filteredUsers.reverse();
    setUsersData(filteredUsers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortActiveProjects]);

  useEffect(function () {
    var filteredUsers = users.sort(function (a, b) {
      return a.finished_projects_count - b.finished_projects_count;
    });
    filteredUsers = sortFinishedProjects
      ? filteredUsers
      : filteredUsers.reverse();
    setUsersData(filteredUsers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortFinishedProjects]);

  return (
    <div className="wrapper">
      {loading ? (
        <>
          <Title
            link={
              userRights.change_department
                ? `/edit-department/${department.id}/`
                : false
            }
          >
            {department.name} ??????????????????????
          </Title>
          <div>
            <div className="mt-2 mb-2 department-block">
              <div>
                <div className="icon-block">
                  <img src={department.logo} alt={department.name} />
                </div>
                <h4 className="department-name">
                  {department.name} ??????????????????????
                </h4>
                <div className="d-flex mt-3">
                  <div className="head-block">
                    <span>???????????? ????????????????????????:</span>
                    <span className="head-name">{department.head_name}</span>
                  </div>
                  <div>
                    <span>{department.count} ??????????????</span>
                    <div className="counts">
                      <span className="mr-5">
                        ??????????????: {department.mentor_count}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="department-background">
                <img src={department.background} alt="background img" />
              </div>
            </div>
            <div className="department-users">
              <span className="list-users">???????????? ???????????????????? </span>
              <Table striped className={"mb-5 mt-4 table-3 tables"}>
                <thead>
                  <tr>
                    <th className={"thead-item"}>??. ??. ??.</th>
                    <select
                      defaultValue=""
                      className="filter-select"
                      onChange={function (e) {
                        setRole(e.target.value)
                      }}
                    >
                      <option value="all">????????</option>
                      <option value="h">????????????</option>
                      <option value="m">????????????</option>
                      <option value="t">????????????</option>
                    </select>
                    <th className={"thead-item"}>?????????? ????????????????</th>
                    <th className={"thead-item"}>
                      <div className="filters-iconBlock">
                        <span>???????????????? ?????????????? </span>
                        <img
                          src={sortsIcon}
                          alt="filtersIcon"
                          onClick={function () {
                            setSortActiveProjects(!sortActiveProjects)
                          }}
                        />
                      </div>
                    </th>
                    <th className={"thead-item"}>
                      <div className="filters-iconBlock">
                        <span className="mr-1">??????????????????????</span>
                        <img
                          src={sortsIcon}
                          alt="filtersIcon"
                          onClick={function () {
                            setSortFinishedProjects(!sortFinishedProjects)
                          }}
                        />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className={"tbody"}>
                  {users.length > 0 ? (
                    users.map(function (user) {
                      return (
                        <tr key={user.id}>
                          <td data-th="??.??.??" className={"tbody-item"}>
                            <Link to={`/user/${user.id}/`}>
                              {user.name ? user.name : user.email} {user.surname}
                            </Link>
                          </td>

                          <td data-th="role" className={"tbody-item"}>
                            {userStatus[user.status]}
                          </td>
                          <td data-th="?????????? ????????????????" className={"tbody-item"}>
                            {user.phone}
                          </td>
                          <td data-th="?????????? ????????????????" className={"tbody-item"}>
                            {user.active_projects_count}
                          </td>
                          <td data-th="?????????? ????????????????" className={"tbody-item"}>
                            {user.finished_projects_count}
                          </td>
                        </tr>
                      )
                    })
                  ) : (
                      <tr className="no-filter-Data">
                        <td colSpan="9">?????? ???????????? ???? ???????? ????????????????????</td>
                      </tr>
                    )}
                </tbody>
              </Table>
            </div>
          </div>
        </>
      ) : (
          <Loading />
        )}
    </div>
  );
};
export default DepartmentPage;
