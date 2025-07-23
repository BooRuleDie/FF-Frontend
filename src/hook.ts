import { useQuery } from "@tanstack/react-query";
import { fetchTableData } from "./api";

export const useGetUsers = () => {
    return useQuery({
        queryKey: ["tableData"],
        queryFn: fetchTableData,
    });
};