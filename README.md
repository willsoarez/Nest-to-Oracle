# Nest-to-Oracle

Easy solution to connect NestJS to OracleDB

#### Configure PATH InstantClient Oracle

### On Windows

# Find the Instant Client Path.:

- Determine the full path to the directory where the Instant Client is installed. 
- For example, if it's installed at C:\instantclient_21_9, that would be the path.

# Configure the PATH.:

- Open the Control Panel.
- Go to "System and Security" -> "System" -> "Advanced system settings."
- On the "Advanced" tab, click "Environment Variables."
- In the "System Variables" section, find the variable named "Path" and click "Edit."
- Click "New" and add the full path to the Instant Client directory.
- Click "OK" to close the windows.

# Restart the Terminal.:

- Open a new terminal or restart any existing terminal for the changes to take effect.

### On Linux or macOS

# Find the Instant Client Path.:

- Determine the full path to the directory where the Instant Client is installed. 
- For example, if it's installed at C:\instantclient_21_9, that would be the path.

# Configure the PATH (Temporary):

- Open a terminal and run the following command, replacing /path/to/your/instantclient with the actual path to the Instant Client:

export PATH=$PATH:/path/to/your/instantclient

# Configure the PATH (Permanent):

- To make the changes permanent, you typically need to add the command to your shell's profile file. The file may be ~/.bashrc, ~/.bash_profile, ~/.zshrc, or something similar depending on your shell.

- Add the line at the end of the profile file:

export PATH=$PATH:/path/to/your/instantclient

- Save the file and close and reopen the terminal or run source ~/.bashrc (or the relevant profile file) to apply the changes immediately.

Remember to replace /path/to/your/instantclient with the actual path to the Instant Client on your system. After making these changes, try running your application again.