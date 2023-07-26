import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import axios from "axios";
import React from "react";
import MovieCard from "@/Components/MovieCard";

interface Movie {
    id: string;
    title: string;
    director: string;
    released: number;
}

export default function Dashboard({ auth }: PageProps) {
    const [data, setData] = React.useState<Movie[]>();

    React.useEffect(() => {
        const getMovies = async () => {
            await axios.get("/movies").then((res) => {
                setData((res.data as Movie[]) ?? []);
            });
        };
        getMovies();
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Lista de Filmes
                </h2>
            }
        >
            <Head title="Filmes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {data?.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
