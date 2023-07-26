<?php

namespace App\Http\Controllers;

use App\Models\Movie as Movie;
use App\Http\Resources\Movie as MovieResource;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index(){
        $movies = Movie::paginate(15);
        return MovieResource::collection($movies);
      }
    
      public function show($id){
        $movie = Movie::findOrFail($id);
        return new MovieResource($movie);
      }
    
      public function store(Request $request){
        $movie = new Movie;
        $movie -> title = $request -> input('title');
        $movie -> director = $request -> input('director');
        $movie -> released = $request -> input('released');
    
        if ($movie->save()) {
          return new MovieResource($movie);
        }
      }
    
       public function update(Request $request){
        $movie = Movie::findOrFail($request -> id);
        $movie -> title = $request -> input('title');
        $movie -> director = $request -> input('director');
        $movie -> released = $request -> input('released');
    
        if ($movie -> save()) {
          return new MovieResource($movie);
        }
      } 
    
      public function destroy($id){
        $movie = Movie::findOrFail($id);

        if ($movie -> delete()) {
          return new MovieResource($movie);
        }
      }
}
