<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;

class ApiKeys extends Model
{
    //
    protected $table_name = 'api_keys';

    protected $fillable = ['user_id', 'name', 'key', 'provider'];

    public function User()
    {
        return $this->belongsTo(User::class);
    }
}
