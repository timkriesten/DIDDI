# Use an official Jupyter Notebook image
FROM jupyter/minimal-notebook

# Set working directory
WORKDIR /app

# Copy your requirements file into the container
COPY requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all files from the repo
COPY . .

# Set PYTHONPATH
ENV PYTHONPATH=/app/src

# Expose Jupyter Notebook port
EXPOSE 8888

# Run Jupyter Notebook
CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root"]