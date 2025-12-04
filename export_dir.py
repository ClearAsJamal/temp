from pathlib import Path

# Set your root directory where the search begins.
root_dir = Path(r"C:\Users\clear\Desktop\SpiritBe")

# List to accumulate the output lines
output_lines = []

# Traverse through every file and directory in the directory tree
for path in root_dir.rglob("*"):
    # Skip if the path contains '.venv' or 'node_modules'
    if ".venv" in path.parts or "node_modules" in path.parts:
        continue

    # Get the relative path from the root directory
    try:
        relative_path = path.relative_to(root_dir)
    except ValueError:
        relative_path = path

    # Label whether it's a directory or a file
    if path.is_dir():
        kind = "DIR"
    else:
        kind = "FILE"

    # Append a simple line with the type and relative path
    output_lines.append(f"{kind}: ROOT/{relative_path}")

# Combine all collected output into one string
output_str = "\n".join(output_lines)

# Define the output file path (inside C:\Users\clear\Desktop\SpiritBe)
output_file = Path(r"C:\Users\clear\Desktop\SpiritBe\Dir.txt")

# Ensure the output directory exists
output_file.parent.mkdir(parents=True, exist_ok=True)

# Write the result to the output file using UTF-8 encoding
with open(output_file, "w", encoding="utf-8") as f:
    f.write(output_str)

print(f"Directory listing written to {output_file}")
