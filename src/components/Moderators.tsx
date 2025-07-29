import React from "react";
import { Table, Spin } from "antd";
import { useGetModerators } from "../hook";
import { useFlag } from "@unleash/proxy-client-react";
import type { TableProps } from "antd";
import type { User } from "../api";

const columns: TableProps<User>["columns"] = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text: string) => <span className="font-medium text-blue-700">{text}</span>,
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
        align: "center" as const,
        render: (age: number) => <span className="px-2 py-1 bg-gray-100 rounded">{age}</span>,
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
        render: (address: string) => (
            <span className="text-gray-600 truncate block max-w-xs" title={address}>
                {address}
            </span>
        ),
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (tags: string[]) => (
            <>
                {tags?.map(tag => (
                    <span key={tag} className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-1 mb-1 px-2 py-0.5 rounded">
                        {tag}
                    </span>
                ))}
            </>
        ),
    },
];

export const Moderators: React.FC = () => {
    const { moderators, isLoading: isLoadingModerators } = useGetModerators();
    const isFlagModeratorUsersEnabled = useFlag("Moderators");
    
    if (!isFlagModeratorUsersEnabled) return ""

    return (
        <>
            <h1 className="mb-3 text-xl font-bold">Moderators</h1>
            {isLoadingModerators ? (
                <div className="flex justify-center items-center h-64">
                    <Spin size="large" />
                </div>
            ) : (
                <Table<User>
                    columns={columns}
                    dataSource={moderators}
                    className="max-w-200 bg-white rounded-2xl border border-gray-200 shadow-md pt-2 overflow-x-auto"
                    rowKey="id"
                />
            )}
        </>
    );
};
