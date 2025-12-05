/**
 * Format post date to relative time (e.g., "2 hours ago")
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date string
 */
function formatPostDate(date) {
    const currentDate = new Date();
    const postDate = new Date(date);
    const timeDifference = currentDate.getTime() - postDate.getTime();

    // Convert milliseconds to seconds
    const seconds = Math.floor(timeDifference / 1000);

    // Calculate the appropriate time units
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    let timeAgo;
    for (const [unit, secondsPerUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsPerUnit);
        if (interval > 0) {
            timeAgo = `${interval} ${unit}${interval !== 1 ? 's' : ''} ago`;
            break;
        }
    }

    return timeAgo || 'Just now';
}

/**
 * Truncate text to a maximum length
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} - Truncated text with ellipsis
 */
function truncateText(text, maxLength) {
    if (!text) return '';
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}

/**
 * Get user photo URL or default
 * @param {string} userPhoto - User photo URL
 * @returns {string} - User photo URL or default
 */
function getUserPhoto(userPhoto) {
    return userPhoto || '/images/nouser.webp';
}

module.exports = {
    formatPostDate,
    truncateText,
    getUserPhoto
};

