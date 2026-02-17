<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        return Post::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $post = Post::create($validatedData);

        return response()->json($post, 201);
    }

    public function show(string $id)
    {
        return Post::findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $post = Post::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $post->update($validatedData);

        return response()->json($post, 200);
    }

    public function destroy(string $id)
    {
        Post::findOrFail($id)->delete();

        return response()->json(null, 204);
    }
}
