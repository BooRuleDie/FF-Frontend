import React from "react";
import { Table, Spin, Tag } from "antd";
import type { TableProps } from "antd";
import type { User } from "./api";
import { useGetUsers } from "./hook";

const columns: TableProps<User>["columns"] = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? "geekblue" : "green";
                    if (tag === "loser") {
                        color = "volcano";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];

const App: React.FC = () => {
    const { users, isLoading } = useGetUsers();

    return (
        <div className="bg-gray-100 h-screen">
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="mb-3 text-xl font-bold">Users</h1>
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <Spin size="large" />
                    </div>
                ) : (
                    <Table<User>
                        columns={columns}
                        dataSource={users}
                        className="max-w-200 bg-white rounded-2xl border border-gray-200 shadow-md pt-2 overflow-x-auto"
                    />
                )}
            </div>
        </div>
    );
};

export default App;
