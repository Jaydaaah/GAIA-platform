<?php

namespace App\Http\Controllers;

use App\Models\Chats;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravolt\Avatar\Facade as Avatar;

class ExamController extends Controller
{
    //

    public function index()
    {
        $id = Auth::id();
        $userName = User::findOrFail($id)->name;
        $chats = Chats::where('user_id', $id)
            ->orderBy('created_at', 'desc')
            ->get()
            ->toArray();

        $temp_api = env('GROQ_API_KEY');

        $ai = Avatar::create("Groq AI")->toBase64();
        $you = Avatar::create($userName)->toBase64();

        return Inertia::render("Exam/Exam", [
            'chats' => $chats,
            'avatar' => [
                'you' => $you,
                'ai' => $ai
            ],
            'api' => [
                'key' => $temp_api,
                'provider' => 'groq'
            ]
        ]);
    }

    public function submit(Request $request)
    {
        $request->validate([
            'prompt' => 'required|string|max:1000|min:2',
        ]);

        $id = Auth::id();

        $prompt = $request->input('prompt');

        $chat = new Chats();
        $chat->side = 'right';
        $chat->message = $prompt;
        $chat->user_id = $id;
        $chat->save();

        return redirect()->back();
    }

    public function syncAIResponse(Request $request)
    {
        $request->validate([
            'data.message' => 'required|string'
        ]);

        $id = Auth::id();
        $chat = new Chats();
        $chat->side = 'left';
        $chat->message = $request->input('data.message');
        $chat->user_id = $id;
        $chat->save();

        return json_encode(['status' => 1, 'description' => 'ok']);
    }

    // public function syncAIResponse(Request $request, int $chat_id)
    // {
    //     $request->validate([
    //         'message' => 'required|string'
    //     ]);

    //     $chat = Chats::findOrFail($chat_id);
    //     $chat->message = $request->input('message');
    //     $chat->save();
    // }
}
