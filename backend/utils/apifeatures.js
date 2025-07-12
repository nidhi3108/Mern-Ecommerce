class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: 'i', // Case-insensitive search
          },
        }
      : {};

    console.log('keyword', keyword);

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    const removeFields = ['keyword', 'page', 'limit'];
    removeFields.forEach((key) => delete queryCopy[key]);

    // Filter for price and rating

    let queryStr = JSON.stringify(queryCopy);
    console.log('queryStr before', queryStr);

    queryStr = queryStr.replace(
      /"(\w+)\[(\w+)\]":/g,
      (_, key, op) => `"${'$' + op}":`
    );

    // wrap inside "price":{...}
    queryStr = queryStr.replace(/^{/, '{"price":{').replace(/}$/, '}}');

    // remove quotes around numbers
    queryStr = queryStr.replace(/"(\d+)"/g, '$1');
    console.log('querystr', queryStr);
    this.query = this.query.find(JSON.parse(queryStr));
    console.log('query', queryStr);
    return this;
  }

  //   pagination(resultPerPage) {
  //     const currentPage = Number(this.queryStr.page) || 1;
  //     const skip = resultPerPage * (currentPage - 1);

  //     this.query = this.query.limit(resultPerPage).skip(skip);
  //     return this;
  //   }
}

module.exports = ApiFeatures;
