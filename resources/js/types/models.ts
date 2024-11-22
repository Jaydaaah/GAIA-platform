/**
 * Interface representing a chat message in the database.
 */
export interface Chat {
    /** The unique identifier for the chat message. */
    id: number;

    /** Indicates the side of the chat (true for sender, false for receiver). */
    side: string;

    /** The content of the chat message. */
    message: string;

    /** The ID of the user who sent the message. */
    user_id: number;

    /** Timestamp when the message was created. */
    created_at: string;

    /** Timestamp when the message was last updated. */
    updated_at: string;
}
