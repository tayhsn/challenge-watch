import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import axios from "axios";
import React from "react";
import { format } from "date-fns";

interface User {
    id: string;
    name: string;
    email: string;
    created_at: string;
}

export default function Users({ auth }: PageProps) {
    const [data, setData] = React.useState<User[]>();

    React.useEffect(() => {
        const getUsers = async () => {
            await axios.get("/users").then((res) => {
                setData((res.data as User[]) ?? []);
            });
        };
        getUsers();
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Lista de Usuários
                </h2>
            }
        >
            <Head title="Usuários" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg bg-white">
                        <table className="table-auto w-full py-8">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Criado em</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {data?.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {format(
                                                new Date(user.created_at),
                                                "dd/MM/yyyy"
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
