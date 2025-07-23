import { useQuery } from "@tanstack/react-query";
import { fetchTableData } from "./api";

export const useGetUsers = () => {
    const { data: users, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: fetchTableData,
    });
    return { users, isLoading };
};
