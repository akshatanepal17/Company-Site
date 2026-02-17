<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Models\Blog;

class BlogController extends Controller
{
    public function index()
    {
        return Blog::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|string|max:255',
        ]);

        $blog = Blog::create($validatedData);

        return response()->json($blog, 201);
    }

    public function show(string $id)
    {
        return Blog::findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $blog = Blog::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|string|max:255',
        ]);

        $blog->update($validatedData);

        return response()->json($blog, 200);
    }

    public function destroy(string $id)
    {
        Blog::findOrFail($id)->delete();

        return response()->json(null, 204);
    }
}
