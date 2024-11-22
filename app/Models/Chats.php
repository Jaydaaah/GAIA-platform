<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;

class Chats extends Model
{
    //
    protected $table_name = "chats";

    protected $fillable = ['side', 'message', 'user_id'];

    public function User()
    {
        return $this->belongsTo(User::class);
    }
}
