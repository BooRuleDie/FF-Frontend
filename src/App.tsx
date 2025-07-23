import React from "react";
import { Table, Spin } from "antd";
import type { DataType } from "./api";
import { useGetUsers } from "./hook";

const App: React.FC = () => {
    const { data, isLoading } = useGetUsers();

    return (
        <div className="bg-gray-100 h-screen">
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="mb-3 text-xl font-bold">Users</h1>
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <Spin size="large" />
                    </div>
                ) : (
                    <Table<DataType>
                        columns={data?.columns}
                        dataSource={data?.data}
                        className="max-w-200 bg-white rounded-2xl border border-gray-200 shadow-md pt-2 overflow-x-auto"
                    />
                )}
            </div>
        </div>
    );
};

export default App;
