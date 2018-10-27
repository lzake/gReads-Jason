exports.up = function (knex, Promise) {
    return knex.schema.createTable('authors', function (authorTable) {
        authorTable.increments("id");
        authorTable.string("first_name");
        authorTable.string("last_name");
        authorTable.text("biography");
        authorTable.text("portrait_url");
    }).then(function () {
        return knex.schema.createTable("book_author", function (bookAuthorTable) {
            bookAuthorTable.increments("id");
            bookAuthorTable.integer("book_id") //.references("id").inTable("books").onDelete("CASCADE");
            bookAuthorTable.integer("author_id") //.references("id").inTable('authors').onDelete("CASCADE");
        });
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("book_author").then(function () {
        return knex.schema.dropTable('authors');
    });
}