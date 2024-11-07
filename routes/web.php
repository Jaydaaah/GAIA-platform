<?php

use App\Http\Controllers\ExamController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentManagementController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get("/exam", [ExamController::class, 'index'])->name('exam');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/dashboard/student-management', [StudentManagementController::class, 'index'])->name('dashboard.student');

    Route::get('/dashboard/course-management', function () {
        return Inertia::render('Dashboard/CourseManagementPage');
    })->name('dashboard.course');

    Route::get('/dashboard/genai-management', function () {
        return Inertia::render('Dashboard/AIAssessmentManagementPage');
    })->name('dashboard.genai');

    Route::get('/dashboard/reports-analytics', function () {
        return Inertia::render('Dashboard/ReportsAnalyticsPage');
    })->name('dashboard.analytics');

    Route::get('/dashboard/message', function () {
        return Inertia::render('Dashboard/MessagingPage');
    })->name('dashboard.message');

    Route::get('/dashboard/support', function () {
        return Inertia::render('Dashboard/FeedbackSupportPage');
    })->name('dashboard.support');

    Route::get('/dashboard/docs', function () {
        return Inertia::render('Dashboard/DocumentationPage');
    })->name('dashboard.docs');
});


require __DIR__ . '/auth.php';
