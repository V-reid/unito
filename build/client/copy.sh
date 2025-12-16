#!/bin/bash

# --- Configuration ---
# Define the source file to be copied into each new directory.
SOURCE_FILE="index.html"

# The list of directories to be created.
declare -a DIR_LIST=(
    "eventi-perDocenti"
    "eventi-divulgazioneScientifica"
    "eventi-competizioniInformatiche"
    "eventi-competizioniInformatiche/swerc"
    "eventi-competizioniInformatiche/cyberchallenge"
    "eventi-catalogo"
    "orientamento-laureaTriennale"
    "orientamento-laureaMagistrale"
    "orientamento-scienzeDellaNatura"
    "orientamento-catalogoIniziative"
    "orientamento-materialeCommissione"
    "didattica-perLeScuole"
    "didattica-perLeScuole/iniziative"
    "didattica-perLeScuole/attivita"
    "didattica-ricerca"
    "didattica-ricerca/progetti"
    "didattica-ricerca/prodotti"
    "contatti"
    "notizie"
    "professore"
)
# ---------------------

echo "--- Starting Directory Creation and File Copy ---"

# 1. Check if the base index.html file exists
if [ ! -f "$SOURCE_FILE" ]; then
    echo "ERROR: The source file '$SOURCE_FILE' was not found in the current directory."
    echo "Please make sure 'index.html' exists before running the script."
    exit 1
fi

# 2. Loop through the list of directories
for DIR_PATH in "${DIR_LIST[@]}"; do
    
    # Create the directory, including parent directories if they don't exist (-p)
    if mkdir -p "$DIR_PATH"; then
        echo "✅ Directory created: $DIR_PATH"
        
        # Copy the source index.html file into the new directory
        if cp "$SOURCE_FILE" "$DIR_PATH/"; then
            echo "   -> Copied $SOURCE_FILE to $DIR_PATH/index.html"
        else
            echo "   ❌ Failed to copy $SOURCE_FILE to $DIR_PATH"
        fi
    else
        echo "❌ Failed to create directory: $DIR_PATH"
    fi
    
done

echo "--- Script Finished ---"