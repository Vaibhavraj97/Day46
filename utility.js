const stringifyDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return !date ? 'undefined' : new Date(Date.parse(date)).toLocaleDateString('en-GB', options);
}