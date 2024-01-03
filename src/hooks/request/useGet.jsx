import { useQuery } from "@tanstack/react-query"

export function useGet(key, queryFnc) {
    const { data, isError, isLoading, ...options } = useQuery({
        queryKey: key,
        queryFn: queryFnc,
    })

    return {
        data,
        isError,
        isLoading,
        ...options,
    }
}
