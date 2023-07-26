interface MovieCardProps {
    movie: {
        title: string;
        director: string;
        released: number;
    };
}

export default function MovieCard(props: MovieCardProps) {
    const { title, director, released } = props.movie;

    return (
        <div className="p-6 text-gray-900 bg-white">
            <h3>Filme: {title}</h3>
            <h4>Diretor: {director}</h4>
            <h5>Ano de lançamento: {released}</h5>
        </div>
    );
}
