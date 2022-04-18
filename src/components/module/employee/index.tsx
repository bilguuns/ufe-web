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
          <div className={"col-md-4"}>
            {employeeType == "teacher" && (
              <>
                <div className=" btn btn-light fw-bold w-100  text-start">
                  ШҮҮХ
                </div>
                <p className="fw-bold px-2">Тэнхим</p>
              </>
            )}

            {employeeType == "teacher" && (
              <>
                <ul
                  className="list-unstyled .d-block 
"
                >
                  {department?.map((department: any, index: number) => {
                    return (
                      // <button
                      //   key={department.id}
                      //   className={`btn ${index === id ? "active" : ""}`}
                      //   onClick={() => setDepartmentId(department.id)}
                      // > {/* <ul > */}
                      <li
                        key={department.id}
                        className={"text-primary text-start "}
                        onClick={() => setDepartmentId(department.id)}
                      >
                        {department.name}
                      </li>
                      /* </ul> */ // </button>
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
                  <div key={employee.id} className="col-md-4">
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
