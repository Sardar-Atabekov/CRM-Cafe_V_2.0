// import React, { useState } from "react";
// import { getData, API } from "../../requests";
// // import Loading from "../../loading/loading";
// import DatePicker from "react-datepicker";
// import "./orders-history.css";

// const OrdersHistoryPage = () => {
//   const [page, setPage] = useState(1);

//   //   const [loading, setLoading] = useState(true);

//   //   useEffect(() => {
//   //     getData(
//   //       `${API}/Statistic/transactionHistory?&pageNumber=${page}&pageSize=${count}&startDate=${TimeFormat(
//   //         startDate
//   //       )}&endDate=${TimeFormat(endDate)}`
//   //     ).then((data) => {
//   //       console.log(data);
//   //       setLoading(false);
//   //       setData(data);
//   //     });
//   //   }, [count, page, startDate, endDate]);

//   const checkStatus = (status) => {
//     let res =
//       status === 0
//         ? "Активный"
//         : status === 1
//         ? "Неактивный"
//         : status === 2
//         ? "Кухня готова"
//         : "Бар готова";
//     return res;
//   };

//   const createPage = () => {
//     let buttons = [];
//     for (let i = 1; i <= data.totalPages; i++) {
//       buttons.push(
//         <button
//           className={`paginationButton ${
//             page === i ? " paginationActiveButton" : ""
//           }`}
//           onClick={() => {
//             setPage(i);
//             setLoading(true);
//           }}
//           key={i}
//         >
//           {i}
//         </button>
//       );
//     }
//     return buttons;
//   };

//   return (
//     <main className="transaction">
//       <Title>История транзакции</Title>
//       <div className="waiterContent transaction">
//         <div className="functionPage">
//           <div className="flex-auto">
//             <NamePage name="История транзакции" />
//             <div className="transactionDisplay">
//               <label htmlFor="show">Показать по</label>
//               <select
//                 id="show"
//                 onChange={(e) => {
//                   setLoading(true);
//                   setPage(1);
//                   setCount(e.target.value);
//                 }}
//                 defaultValue={count}
//               >
//                 <option value="10">10</option>
//                 <option value="25">25</option>
//                 <option value="50">50</option>
//                 <option value="100">100</option>
//               </select>
//             </div>
//           </div>
//           <div className="calendar">
//             <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               locale="ru"
//               selectsStart
//               className="form-control"
//               startDate={startDate}
//               endDate={endDate}
//               maxDate={endDate}
//               dateFormat="dd-MM-yyyy"
//             />
//             <DatePicker
//               className="form-control"
//               selected={endDate}
//               onChange={(date) => setEndDate(date)}
//               selectsEnd
//               locale="ru"
//               startDate={startDate}
//               endDate={endDate}
//               minDate={startDate}
//               dateFormat="dd-MM-yyyy"
//             />
//           </div>
//         </div>

//         <table>
//           <tbody>
//             <tr>
//               <th className="sortingNumber">№</th>
//               <th>Время</th>
//               <th>Официант</th>
//               <th>Блюда</th>
//               <th>Статус</th>
//               <th>Итого</th>
//             </tr>
//             {data.items &&
//               data.items.map((order) => (
//                 <tr key={order.id}>
//                   <td>{order.id}</td>
//                   <td>
//                     <time dateTime={order.orderDate}>
//                       {TimeDate(order.orderDate)}
//                     </time>
//                   </td>
//                   <td>{order.waiterName}</td>
//                   <td>
//                     {modalStatus ? (
//                       <MoreModal
//                         id={modalOrder.id}
//                         meals={modalOrder.meals}
//                         setStatus={() => setModalStatus(false)}
//                       />
//                     ) : (
//                       <span
//                         onClick={() => {
//                           setModalStatus(true);
//                           setModalOrder({
//                             id: order.id,
//                             meals: order.mealOrders,
//                           });
//                         }}
//                         className="moreMeals"
//                       >
//                         Посмотреть
//                       </span>
//                     )}
//                   </td>
//                   <td>{checkStatus(order.status)}</td>
//                   <td>{order.totalPrice} сом</td>
//                   {/* <td className="operationBlock">
//                        <div className="operation">
//                         <Link to={{ pathname: `/order/${order.id}/` }}>
//                           Изменить{" "}
//                         </Link>
//                         <button
//                           onClick={event => {
//                             deleteData(`/orders/${order.id}`);
//                             event.target.parentNode.parentNode.parentNode.remove();
//                           }}
//                         >
//                           Удалить{" "}
//                         </button>
//                       </div>
//                     </td> */}
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//         <div className="paginationBlock">
//           {data.totalPages > 1 ? createPage() : null}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default OrdersHistoryPage;