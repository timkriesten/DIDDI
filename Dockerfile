FROM python:3.10

# Install system dependencies for locales and set locale
RUN apt-get update
RUN apt-get install -y locales
RUN sed -i -e 's/# de_DE.UTF-8 UTF-8/de_DE.UTF-8 UTF-8/' /etc/locale.gen && \
    locale-gen
ENV LC_ALL=de_DE.UTF-8
ENV LANG=de_DE.UTF-8
ENV LANGUAGE=de_DE:de

# Install Jupyter and Voila
RUN pip install --no-cache-dir jupyter notebook voila

# Set up the working directory
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Set PYTHONPATH
ENV PYTHONPATH=/app/src

# Expose Voila port
EXPOSE 8866

# Start Voila serving main.ipynb
CMD ["voila", "main.ipynb", "--no-browser", "--Voila.ip=0.0.0.0", "--Voila.port=8866"]

