import React from "react";
import NotFoundPage from "./pages/404/404";
import StaffPage from "./pages/staff/staff";
import ProfitPage from "./pages/profit/profit";
import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ProjectPage from "./pages/project/project";
import EmployeePage from "./pages/employee/employee";
// import ArticlePage from "./pages/article/article";
// import NewsPage from "./pages/news-page/news-page";
// import AddNewsPage from "./pages/add-news/add-news";
import ProceedsPage from "./pages/proceeds/proceeds";
import ProjectsPage from "./pages/projects/projects";
import LoginPage from "./pages/login-page/login-page";
import DepartmentPage from "./pages/department/department";
import CreateMealPage from "./pages/create-meal/create-meal";
import DepartmentsPage from "./pages/departments/departments";
import IngredientsPage from "./pages/ingredients/ingredients";
import AddEmployeePage from "./pages/add-employee/add-employee";
import EditEmployeePage from "./pages/edit-employee/edit-employee";
import FoodDrinksPage from "./pages/food-drinks/food-drinks.js";
import EditIngredientPage from "./pages/edit-ingredient/edit-ingredient";
import EditFoodDrinkPage from "./pages/edit-food__drink/edit-food_drink";
import CreateIngredientPage from "./pages/create-ingredient/create-ingredient";
// import PersonalPage from "./pages/personal-area/personal-area";
import EditProjectPage from "./pages/edit-project/edit-project";
// import EditArticlePage from "./pages/edit-article/edit-article";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PersonalEditPage from "./pages/personal-edit/personal-edit";
import AddDepartmentPage from "./pages/add-department/add-department";
import OrdersHistoryPage from "./pages/orders-history/orders-history";
import ChangePasswordPage from "./pages/change-password/change-password";
import ForgetPasswordPage from "./pages/forget-password/forget-password";
import EditDepartmentPage from "./pages/edit-department/edit-department";
import OrderStatisticsPage from "./pages/order-statistics/order-statistics";
import PasswordRecoveryPage from "./pages/password-recovery/password-recovery";
function App() {
  // const inDeveloping = true;
  return (
    <BrowserRouter>
      <React.Fragment>
        {localStorage.getItem("crmCAFEDate") ? (
          <div className="app-wrapper">
            <NavBar />
            <div className="container">
              <Header />
              <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/staff/" exact component={StaffPage} />
                <Route path="/profit/" exact component={ProfitPage} />
                {/* <Route path="/user/:id/" exact component={UserPage} /> */}
                <Route path="/employee/:id/" exact component={EmployeePage} />
                {/* <Route path="/news/:page" exact component={NewsPage} /> */}
                <Route path="/proceeds/" exact component={ProceedsPage} />
                <Route
                  path="/add-employee/"
                  exact
                  component={AddEmployeePage}
                />
                {/* <Route path="/add-news/" exact component={AddNewsPage} /> */}
                <Route path="/project/:id/" exact component={ProjectPage} />
                {/* <Route path="/article/:id/" exact component={ArticlePage} /> */}
                {/* <Route path="/personal/:id/" exact component={PersonalPage} /> */}
                <Route
                  path="/edit-employee/:id/"
                  exact
                  component={EditEmployeePage}
                />
                <Route path="/departments/" exact component={DepartmentsPage} />
                <Route path="/food-drinks/" exact component={FoodDrinksPage} />
                <Route path="/ingredients/" exact component={IngredientsPage} />
                <Route
                  path="/ingredient/:id"
                  exact
                  component={EditIngredientPage}
                />
                <Route
                  path="/create-ingredient/"
                  exact
                  component={CreateIngredientPage}
                />
                <Route path="/create-meal/" exact component={CreateMealPage} />
                <Route path="/edit-meal/:id" exact component={EditFoodDrinkPage} />

                <Route path="/projects/:page/" exact component={ProjectsPage} />
                <Route
                  path="/order-statistics/"
                  exact
                  component={OrderStatisticsPage}
                />
                {/* <Route
                  path="/orders-history/"
                  exact
                  component={OrdersHistoryPage}
                /> */}
                <Route
                  path="/department/:id/"
                  exact
                  component={DepartmentPage}
                />
                <Route
                  path="/forget-password/"
                  exact
                  component={ForgetPasswordPage}
                />
                <Route
                  path="/add-department/"
                  exact
                  component={AddDepartmentPage}
                />
                <Route
                  path="/edit-project/:id/"
                  exact
                  component={EditProjectPage}
                />
                {/* <Route
                  path="/edit-article/:id/"
                  exact
                  component={EditArticlePage}
                /> */}
                <Route
                  path="/change-password/:id/"
                  exact
                  component={ChangePasswordPage}
                />
                <Route
                  path="/personal-edit/:id/"
                  exact
                  component={PersonalEditPage}
                />

                <Route
                  path="/change-password/:id/"
                  exact
                  component={ChangePasswordPage}
                />
                <Route
                  path="/edit-department/:id/"
                  exact
                  component={EditDepartmentPage}
                />
                <Route
                  path="/password-recovery/:id/"
                  exact
                  component={PasswordRecoveryPage}
                />
                <Route path="*" exact component={NotFoundPage} />
              </Switch>
              <Footer />
            </div>
          </div>
        ) : (
          <Switch>
            <Route path="/" exact component={LoginPage} />
          </Switch>
        )}
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
