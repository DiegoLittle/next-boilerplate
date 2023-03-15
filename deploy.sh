#!/bin/bash

# read .env file and loop through each line
while IFS= read -r line; do
  # check if line is not empty or a comment (denoted by #)
  if [[ "${line}" != "" && "${line}" != \#* ]]; then
    # extract the key and value from the line
    KEY=$(echo "${line}" | cut -d= -f1)
    VALUE=$(echo "${line}" | cut -d= -f2)
    # run the "vercel env add" command with the key-value pair
    echo "${VALUE}" | vercel env add "${KEY}" production
  fi
done < .env