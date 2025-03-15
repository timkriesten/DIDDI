FROM python:3.10

# Install system dependencies for locales and set locale
RUN apt-get update
RUN apt-get install -y locales
RUN sed -i -e 's/# de_DE.UTF-8 UTF-8/de_DE.UTF-8 UTF-8/' /etc/locale.gen && \
    locale-gen
ENV LC_ALL=de_DE.UTF-8
ENV LANG=de_DE.UTF-8
ENV LANGUAGE=de_DE:de

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
CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root", "--NotebookApp.log_level=DEBUG"]
