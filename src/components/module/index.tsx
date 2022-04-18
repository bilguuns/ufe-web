import EmployeeModule from "./employee";
import DepartmentModule from "./department";

const Module = ({ moduleName, data, id }: any) => {
  if (moduleName === "department") {
    return (
      <>
        <DepartmentModule />
      </>
    );
  }
  if (moduleName === "employee") {
    return (
      <>
        <EmployeeModule data={data} employeeType={"employee"} />
      </>
    );
  }

  if (moduleName === "teacher") {
    return (
      <>
        <EmployeeModule data={data} employeeType={"teacher"} id={0} />
      </>
    );
  }
  if (moduleName === "executive") {
    return (
      <>
        <EmployeeModule data={data} employeeType={"executive"} />
      </>
    );
  }
  return (
    <>
      <h4>404</h4>
    </>
  );
};

export default Module;
