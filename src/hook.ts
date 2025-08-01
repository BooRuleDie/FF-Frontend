import { useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchDevelopers, fetchAdmins, fetchModerators } from "./api";

export const useGetUsers = () => {
    const { data: users, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });
    return { users, isLoading };
};

export const useGetDevelopers = () => {
    const { data: developers, isLoading } = useQuery({
        queryKey: ["developers"],
        queryFn: fetchDevelopers,
    });
    return { developers, isLoading };
};

export const useGetAdmins = () => {
    const { data: admins, isLoading } = useQuery({
        queryKey: ["admins"],
        queryFn: fetchAdmins,
    });
    return { admins, isLoading };
};

export const useGetModerators = () => {
    const { data: moderators, isLoading } = useQuery({
        queryKey: ["moderators"],
        queryFn: fetchModerators,
    });
    return { moderators, isLoading };
};
