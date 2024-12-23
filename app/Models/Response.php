<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Response extends Model
{
    //
    use SoftDeletes;

    protected $table = 'responses';

    protected $fillable = ['type', 'content'];
}
