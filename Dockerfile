FROM python:3.10

# Install Jupyter and dependencies
RUN pip install --no-cache-dir jupyter notebook

# Set up the working directory
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Set PYTHONPATH
ENV PYTHONPATH=/app/src

# Expose Jupyter Notebook port
EXPOSE 8888

# Start Jupyter Notebook
CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root"]
