# Create a list of 5 numbers
numbers = [42, 7, 19, 94, 23]

# Find the maximum and minimum values using built-in functions
max_val = max(numbers)
min_val = min(numbers)

print(f"List of numbers: {numbers}")
print(f"Maximum value: {max_val}")
print(f"Minimum value: {min_val}")


# Create a list containing 3 book dictionaries
library = [
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "year": 1937
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "year": 1949
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "year": 1925
    }
]

# Access and display details of specific books in the list
print(f"First book's title: {library[0]['title']}")
print(f"Second book's author: {library[1]['author']}")

print("\nFull Library Catalog:")
for b in library:
    print(f"- '{b['title']}' by {b['author']} ({b['year']})")



    # Check data types using the built-in type() function
print(f"Data type of 'numbers': {type(numbers)}")
print(f"Data type of 'book': {type(book)}")
print(f"Data type of 'library': {type(library)}")
print(f"Data type of a book's year: {type(book['year'])}")

# Alternative validation using isinstance()
is_list = isinstance(numbers, list)
print(f"Is 'numbers' a list? {is_list}")
