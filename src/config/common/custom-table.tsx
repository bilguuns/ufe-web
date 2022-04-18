import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Link from "next/link";
import { Button, Alert, Table, Skeleton, Divider, Pagination } from "antd";
import { PrinterOutlined, FileExcelOutlined } from "@ant-design/icons";
import ScrollContainer from "react-indiana-drag-scroll";

import { getCurrentDate } from "lib/utils/helpers";
import EmptyAlert from "./empty-alert";

const CustomTable = ({
    columns,
    data,
    error,
    newRoute,
    pageIndex,
    setPageIndex,
    hasPrint = true,
    hasExcel = true,
    rowClassName,
}: any) => {
    const componentRef: any = useRef<HTMLDivElement>(null);
    const customizedColumns = [
        {
            title: "№",
            dataIndex: "id",
            key: "id",
            render: function renderAction(
                text: any,
                record: any,
                index: number
            ) {
                return pageIndex
                    ? (pageIndex - 1) * data?.data?.pageSize + index + 1
                    : index + 1;
            },
        },
    ].concat(columns);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const downloadExcel = async () => {
        const Excel = await import("antd-table-saveas-excel");
        const excel = new Excel.Excel();

        excel
            .addSheet("Жагсаалт")
            .addColumns(customizedColumns)
            .addDataSource(data?.data?.data)
            .saveAs(`Excel - ${getCurrentDate()}.xlsx`);
    };

    if (error)
        return (
            <Alert
                className="mb-3"
                message={error.message}
                type="error"
                showIcon
            />
        );

    if (!error && !data) return <Skeleton active />;

    return (
        <>
            {(newRoute || hasPrint || hasExcel) && (
                <>
                    {newRoute && (
                        <Link href={newRoute}>
                            <a className="mr-3">
                                <Button type="primary">Нэмэх</Button>
                            </a>
                        </Link>
                    )}

                    {hasPrint && (
                        <Button onClick={handlePrint} className="mr-3">
                            <PrinterOutlined /> Хэвлэх
                        </Button>
                    )}

                    {hasExcel && (
                        <Button onClick={downloadExcel}>
                            <FileExcelOutlined /> Excel татах
                        </Button>
                    )}

                    <Divider />
                </>
            )}

            <>
                {pageIndex && setPageIndex && (
                    <Pagination
                        current={pageIndex}
                        onChange={(page) => setPageIndex(page)}
                        total={data?.data?.count}
                        pageSize={data?.data?.pageSize}
                        showSizeChanger={false}
                        className="mb-3"
                        hideOnSinglePage={true}
                    />
                )}

                {columns &&
                    (data?.data?.data?.length > 0 ? (
                        <ScrollContainer
                            hideScrollbars={true}
                            nativeMobileScroll={true}
                            ref={componentRef}
                        >
                            <Table
                                dataSource={data?.data?.data}
                                columns={customizedColumns}
                                rowKey="id"
                                pagination={false}
                                rowClassName={rowClassName}
                                size="small"
                            />
                        </ScrollContainer>
                    ) : (
                        <EmptyAlert />
                    ))}

                {pageIndex && setPageIndex && (
                    <Pagination
                        current={pageIndex}
                        onChange={(page) => setPageIndex(page)}
                        total={data?.data?.count}
                        pageSize={data?.data?.pageSize}
                        showSizeChanger={false}
                        className="mt-3"
                        hideOnSinglePage={true}
                    />
                )}
            </>
        </>
    );
};

export default CustomTable;
