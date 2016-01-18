import htmlToJson from 'html-to-json';

const spider = {};
spider.fetchBuildData = url => {
    return htmlToJson.request(url, {
        results: ($doc, $) => {
            const results = {};
            Array.prototype.slice.call($('tr.result')).filter(tr => {
                return $(tr).find('td.branch').text().trim().length;
            }).forEach(tr => results[$(tr).find('td.branch').text().trim()] = {
                branch: $(tr).find('td.branch').text(),
                status: $(tr).find('td.details .codestr a').text(),
                statusUrl: $(tr).find('td.details .codestr a').attr('href') || '',
                message: $(tr).find('td.details .comment').text(),
                url: url,
            });
            const recents = Array.prototype.slice.call($('#most_recent_list .branch'), 0, 5).map(br => $(br).text().trim());
            return recents.map(branch => results[branch])
        }
    }, (err, result) => {
    });
};

module.exports = spider;
