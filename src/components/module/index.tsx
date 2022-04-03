import EmployeeModule from "./employee";
import DepartmentModule from "./department";

const Module = ({moduleName}: any) => {


    if (moduleName === "department") {
        return (
            <>
                <DepartmentModule/>
            </>
        );
    }

    if (moduleName === "employee") {
        return (
            <>
                <EmployeeModule/>
            </>
        );
    }

    return (
        <>
            <h4>404</h4>
        </>
    );

}

export default Module;