import AvatarCard from "components/common/avatar-card";
import { EmployeeAPI } from "lib/api/employee";
import { DepartmentAPI } from "lib/api/department";
// import { EmployeeSWR } from "lib/api/employee";
import React, { useEffect, useState } from "react";

const EmployeeModule = ({ props, data, employeeType }: any) => {
  const [employees, setEmployees]: any = useState([]);
  const [department, setDepartments]: any = useState([]);
  const [id, setDepartmentId]: any = useState(0);

  const loadEmployees = async () => {
    const emps = await EmployeeAPI.all(employeeType, id);

    const departments = await DepartmentAPI.list();

    console.log("+++++++", id);

    console.log("======= Emps1 returned");
    console.log(emps);

    setEmployees(emps);
    setDepartments(departments);
  };

  useEffect(() => {
    loadEmployees();
  }, [id]);

  return (
    <>
      <div className="container my-5">
        <div className={"row"}>
          <div className={"col-md-3"}>
            {employeeType == "teacher" && (
              <>
                <div
                  className=" btn btn-light fw-bold w-100 text-start  "
                  style={{ cursor: "default" }}
                >
                  <h5 className="mt-2 text-wrap">ШҮҮХ</h5>
                </div>
                <p className="fw-bold px-2 text-wrap">Тэнхим</p>
              </>
            )}

            {employeeType == "teacher" && (
              <>
                <ul className="list-group">
                  {department?.map((department: any, index: number) => {
                    return (
                      <li
                        key={department.id}
                        className={`btn list-group-item list-group-item-action text-start  text-wrap d-block${
                          index === department.id ? "active" : ""
                        }`}
                        style={{ color: "#345BB8" }}
                        onClick={() => setDepartmentId(department.id)}
                      >
                        {department.name}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>

          <div className="col-md-8">
            <div className={"row"}>
              {employees.map((employee: any, index: number) => {
                return (
                  <div key={employee.id} className=" col-12 col-md-6  col-lg-4">
                    <AvatarCard employeeData={employee} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmployeeModule;
