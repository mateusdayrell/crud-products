<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreReviewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'reviewable_id'   => 'nullable',
            'reviewable_type'   => 'nullable',
            'rating'   => 'required|numeric|min:1|max:5',
            'content'   => 'required|max:500|min:5',
        ];
    }
}
